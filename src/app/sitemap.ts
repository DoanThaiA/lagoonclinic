import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { services } from "@/data/services";
import { posts } from "@/data/posts";
import { jobs } from "@/data/jobs";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPages = ["", "/gioi-thieu", "/dich-vu", "/cong-nghe", "/bang-gia", "/bai-viet", "/lien-he", "/dat-lich", "/tuyen-dung", "/chinh-sach-bao-mat", "/dieu-khoan"];
  return [
    ...staticPages.map((p) => ({ url: `${site.url}${p}`, lastModified: now, priority: p === "" ? 1 : 0.7 })),
    ...services.map((s) => ({ url: `${site.url}/dich-vu/${s.slug}`, lastModified: now, priority: 0.9 })),
    ...posts.map((p) => ({ url: `${site.url}/bai-viet/${p.slug}`, lastModified: new Date(p.date), priority: 0.6 })),
    ...jobs.map((j) => ({ url: `${site.url}/tuyen-dung/${j.slug}`, lastModified: new Date(j.datePosted), priority: 0.6 })),
  ];
}
