import { getHomepageBlocks } from "@/actions/hompage-actions";
import BlockRenderer from "@/components/blockrenderer/block";
import { generateBlocksIds } from "@/lib/helpers";

async function Homepage() {
  const data = await getHomepageBlocks();
  const blocks = await generateBlocksIds(data);
  return (
    <main>
      <BlockRenderer blocks={blocks} />
      <div>{JSON.stringify(blocks)}</div>
    </main>
  );
}

export default Homepage;
