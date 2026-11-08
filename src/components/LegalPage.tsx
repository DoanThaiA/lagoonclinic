import { PageHero } from "./ui";

export default function LegalPage({
  title,
  updated,
  sections,
}: {
  title: string;
  updated: string;
  sections: { h: string; p: string[] }[];
}) {
  return (
    <>
      <PageHero crumbs={[{ label: title }]} title={title} desc={`Cập nhật lần cuối: ${updated}`} />
      <div className="container-x max-w-3xl py-14">
        <div className="prose-lagoon">
          {sections.map((s) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              {s.p.map((t, i) => (
                <p key={i}>{t}</p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
