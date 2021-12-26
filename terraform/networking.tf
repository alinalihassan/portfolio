resource "google_compute_region_network_endpoint_group" "portfolio_neg" {
  name                  = "portfolio-neg"
  network_endpoint_type = "SERVERLESS"
  region                = var.region
  cloud_run {
    service = google_cloud_run_service.portfolio_service.name
  }
}

resource "google_compute_backend_service" "portfolio_backend_service" {
  name       = "portfolio-backend-service"
  enable_cdn = true
  log_config {
    enable      = true
    sample_rate = 1
  }
  backend {
    group = google_compute_region_network_endpoint_group.portfolio_neg.id
  }
}

resource "google_compute_global_address" "default" {
  name         = "portfolio-address"
  ip_version   = "IPV4"
  address_type = "EXTERNAL"
}

resource "google_compute_url_map" "default" {
  name            = "portfolio-url-map"
  default_service = google_compute_backend_service.portfolio_backend_service.id
}

resource "google_compute_target_http_proxy" "http" {
  name    = "portfolio-http-proxy"
  url_map = google_compute_url_map.default.id
}

resource "google_compute_global_forwarding_rule" "http" {
  name       = "portfolio-http-rule"
  target     = google_compute_target_http_proxy.http.self_link
  ip_address = google_compute_global_address.default.address
  port_range = "80"

  depends_on = [google_compute_global_address.default]
}


resource "google_compute_global_forwarding_rule" "https" {
  name       = "portfolio-https-rule"
  target     = google_compute_target_https_proxy.default.self_link
  ip_address = google_compute_global_address.default.address
  port_range = "443"
  depends_on = [google_compute_global_address.default]
}

resource "google_compute_target_https_proxy" "default" {
  name    = "portfolio-https-proxy"
  url_map = google_compute_url_map.default.id

  ssl_certificates = [
    google_compute_managed_ssl_certificate.alinalihassan.id
  ]
}

resource "google_compute_managed_ssl_certificate" "alinalihassan" {
  name = "portfolio-ssl-cert"

  managed {
    domains = ["${var.domain_name}.", "www.${var.domain_name}."]
  }
}
