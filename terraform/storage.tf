resource "google_storage_bucket" "assets" {
  name                        = "alinalihassan-portfolio-assets"
  location                    = "EU"
  force_destroy               = true
  uniform_bucket_level_access = true
}

resource "google_storage_bucket_iam_binding" "landing_page_iam_binding" {
  bucket = google_storage_bucket.assets.name
  role   = "roles/storage.objectViewer"
  members = [
    "allUsers"
  ]
}
