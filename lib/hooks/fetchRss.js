import formatTimeAgo from "../formatTimeAgo";
import generateRandomProfile from "../randomAvatar";

export const fetchRssData = async () => {
  const res = await fetch("/api/rss-proxy");
  const data = await res.json();

  const items = await Promise.all(
    data.rss.channel.item.map(async (item, id) => {
      const amountMatch = item.description.match(/Amount:\s*(\d+)/);
      const amount = amountMatch?.[1];

      const profile = generateRandomProfile();

      return {
        id,
        avatar: profile.avatar,
        pubDate: formatTimeAgo(item.pubDate),
        description: amount,
        name: profile.name,
      };
    })
  );

  return items;
};
