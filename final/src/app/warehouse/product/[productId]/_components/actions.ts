import { eq } from "drizzle-orm";

import { db } from "@/db";
import { productDetailTable, productTable } from "@/db/schema";

export async function getProductPhotos(productId: string) {
  console.log(productId);
  const productPhotos = await db.query.productDetailTable.findMany({
    where: eq(productDetailTable.productId, productId),
    columns: { productImageLink: true, productStyle: true },
  });

  return productPhotos;
}

export const deleteProduct = async (productId: string) => {
  "use server";
  console.log("[deleteProduct]");
  await db.delete(productTable).where(eq(productTable.displayId, productId));
  return;
};

export async function getProductDetail_2(productId: string) {
  console.log(productId);
  const productDetail = await db.query.productDetailTable.findMany({
    where: eq(productDetailTable.productId, productId),
    columns: {
      productQuantity: true,
      productSold: true,
      productPrice: true,
    },
  });

  return productDetail;
}
