import { PROJECT_TITLE } from "~/lib/constants";

export async function GET() {
  const appUrl =
    process.env.NEXT_PUBLIC_URL ||
    `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

  const config = {
    accountAssociation: {
      header:
        "eyJmaWQiOjkxNDc5MywidHlwZSI6ImF1dGgiLCJrZXkiOiIweERFQWNEZTZlQzI3RmQwY0Q5NzJjMTIzMkM0ZjBkNDE3MWRkYTIzNTcifQ",
      payload:
        "eyJkb21haW4iOiJ3aWxseXdhcnJpb3ItYnJpZ2h0YmVhY2hjbHViLnZlcmNlbC5hcHAifQ",
      signature:
        "ZJzVcqU0oeKYp24gYxnI3qz4PBCiPjW4cpjXB6UPvu1KDHi3cJQEuzQpQKaMa5/CquqU83dy4DPbR2TfkVCZ6xs=",
    },
    miniapp: {
      version: "1",
      name: PROJECT_TITLE,
      iconUrl: `${appUrl}/icon.png`,
      homeUrl: appUrl,
      imageUrl: `${appUrl}/frames/hello/opengraph-image`,
      ogImageUrl: `${appUrl}/frames/hello/opengraph-image`,
      buttonTitle: "Open",
      splashImageUrl: `${appUrl}/splash.png`,
      splashBackgroundColor: "#f7f7f7",
      webhookUrl: `${appUrl}/api/webhook`,
      primaryCategory: "social",
    },
  };

  return Response.json(config);
}
