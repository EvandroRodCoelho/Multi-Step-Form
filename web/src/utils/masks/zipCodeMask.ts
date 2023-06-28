export function zipCodeMask(zip: string) {
    zip = zip.replace(/\D/g, "")
    zip = zip.replace(/^(\d{5})(\d)/, "$1-$2")
    return zip;
  }