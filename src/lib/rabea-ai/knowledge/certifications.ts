import { certificates } from "@/Data/certificates";

export const verifiedCertifications = certificates
  .filter((certificate) => certificate.verified)
  .map(({ title, issuer, date, expirationDate, validationNumber, validationUrl, description }) => ({
    title,
    issuer,
    date,
    ...(expirationDate ? { expirationDate } : {}),
    ...(validationNumber ? { validationNumber, validationUrl } : {}),
    description,
  }));

export const certificationNotes =
  "Only verified certifications listed in the portfolio are public here. Do not infer other certifications or claim a credential that is absent from this list. Expiration dates and AWS validation numbers are provided only when present in the verified certificate record.";
