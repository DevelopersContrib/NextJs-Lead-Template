import formatTimeAgo from "../formatTimeAgo";
import generateRandomAvatar from "../randomAvatar";

export const fetchRssData = async () => {
  const res = await fetch("/api/rss-proxy");

  const data = await res.json();

  return data.rss.channel.item.slice(0, 5).map((item, id) => {
    const amountMatch = item.description.match(/Amount:\s*(\d+)/);
    const amount = amountMatch ? amountMatch[1] : null;

    return {
      id,
      avatar: generateRandomAvatar(),
      pubDate: formatTimeAgo(item.pubDate),
      description: amount,
    };
  });
};
