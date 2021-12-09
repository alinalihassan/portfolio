
resource "google_cloud_run_service" "portfolio_service" {
  name                       = "portfolio-service"
  location                   = var.region
  autogenerate_revision_name = true

  template {
    spec {
      containers {
        image = data.google_container_registry_image.portfolio_image.image_url

        ports {
          container_port = var.app_port
        }
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

resource "google_cloud_run_service_iam_member" "public_access" {
  service  = google_cloud_run_service.portfolio_service.name
  location = google_cloud_run_service.portfolio_service.location
  role     = "roles/run.invoker"
  member   = "allUsers"
}
