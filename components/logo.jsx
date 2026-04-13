import Image from "next/image";

export default function Logo({ domain, logo }) {
  const brand = domain?.trim() || "Site";
  const logoAlt = `${brand} — home`;

  if (logo != null && logo !== "") {
    return (
      <h1 className="hero-title hero-title--brand mb-3">
        <Image
          src={logo}
          width={320}
          height={96}
          alt={logoAlt}
          className="img-fluid hero-logo-img d-inline-block"
          sizes="(max-width: 768px) 90vw, 320px"
          priority
        />
      </h1>
    );
  }

  return (
    <h1 className="hero-title tw-capitalize mb-3">{brand}</h1>
  );
}
