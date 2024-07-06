import { getHomepageBlocks } from "@/actions/hompage-actions";
import BlockRenderer from "@/components/blockrenderer/block";
import { generateBlocksIds } from "@/lib/helpers";

async function Homepage() {
  const data = await getHomepageBlocks();
  const blocks = await generateBlocksIds(data);
  console.log(blocks);
  return (
    <main>
      <BlockRenderer blocks={blocks} />
    </main>
  );
}

export default Homepage;
