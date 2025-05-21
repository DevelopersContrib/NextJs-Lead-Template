export const fetchRssData = async () => {
  const res = await fetch("/api/rss-proxy");

  const data = await res.json();

  return data.rss.channel.item.map((item, id) => ({
    id: id,
    title: item.title,
    link: item.link,
    pubDate: item.pubDate,
    description: item.description,
  }));
};
