resource "google_dns_managed_zone" "alinalihassan_zone" {
  name        = "alinalihassan-zone"
  dns_name    = "alinalihassan.com."
  description = "alinalihassan DNS zone"
}

resource "google_dns_managed_zone" "hassanalinali_zone" {
  name        = "hassanalinali-zone"
  dns_name    = "hassanalinali.com."
  description = "hassanalinali DNS zone"
}
