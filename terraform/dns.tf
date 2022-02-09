resource "google_dns_managed_zone" "alinalihassan_zone" {
  name        = "alinalihassan-zone"
  dns_name    = "alinalihassan.com."
  description = "alinalihassan DNS zone"
  dnssec_config {
    state = "on"
  }
}

resource "google_dns_record_set" "alinalihassan_zone_www" {
  managed_zone = google_dns_managed_zone.alinalihassan_zone.name
  name         = "www.${google_dns_managed_zone.alinalihassan_zone.dns_name}"
  type         = "A"
  ttl          = 600
  rrdatas      = [google_compute_global_address.default.address]
}

resource "google_dns_record_set" "alinalihassan_zone_matching" {
  managed_zone = google_dns_managed_zone.alinalihassan_zone.name
  name         = google_dns_managed_zone.alinalihassan_zone.dns_name
  type         = "A"
  ttl          = 600
  rrdatas      = [google_compute_global_address.default.address]
}

resource "google_dns_record_set" "alinalihassan_zone_home" {
  managed_zone = google_dns_managed_zone.alinalihassan_zone.name
  name         = "home.${google_dns_managed_zone.alinalihassan_zone.dns_name}"
  type         = "CNAME"
  ttl          = 600
  rrdatas      = [var.home_url]
}
