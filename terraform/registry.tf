resource "google_container_registry" "registry" {
  location = var.gcr_region
  depends_on = [
    google_project_service.container_registry
  ]
}

data "google_container_registry_image" "portfolio_image" {
  name   = "portfolio"
  region = var.gcr_region
  tag    = "latest"
}
