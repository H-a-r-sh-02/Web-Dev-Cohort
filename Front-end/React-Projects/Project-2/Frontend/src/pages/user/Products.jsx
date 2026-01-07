import { lazy, Suspense, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import customFetchHook from "../../utils/customFetchHook";
const ProductTemplate = lazy(() => import("../../components/ProductTemplate"));


const Products = () => {
 const { products, hasMore, fetchProducts } = customFetchHook();
  

 
  return (
    <div className="w-full px-10 py-5">
      <InfiniteScroll
        dataLength={products.length}
        next={fetchProducts}
        hasMore={hasMore}
        loader={<h4 className="w-full text-center py-10">Loading...</h4>}
        endMessage={
          <p className="w-full text-center py-10 text-zinc-500 clear-both">
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="flex flex-wrap">
          {products.map((product) => (
            <Suspense
              fallback={
                <h1 className="text-center text-5xl text-yellow-500">
                  Loading...
                </h1>
              }
            >
              <ProductTemplate key={product.id} product={product} />
            </Suspense>
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Products;
