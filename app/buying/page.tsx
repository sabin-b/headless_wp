import { getPageData } from "@/actions/page-action";
import BlockRenderer from "@/components/blockrenderer/block";

async function Buyingpage() {
  const { blocks, title } = await getPageData("buying");
  return (
    <main>
      {blocks.length === 0 && <h1>{title}</h1>}
      {blocks.length > 0 && <BlockRenderer blocks={blocks} />}
    </main>
  );
}

export default Buyingpage;
