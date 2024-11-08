import React from "react";

function createProductCard({
  imageUrl = "placeholder.jpg",
  productUrl = "#",
  productName = "Product Name",
  price = "₹ 0.00",
  tags = ["New"],
  description = "Product description goes here",
}) {
  return (
    <div
      className="sf__pcard cursor-pointer sf-prod__block sf__pcard-style-3 product-card-block border border-gray-200 box-border text-[rgb(22,29,37)] font-sans text-base font-normal leading-[24px] mb-8 px-2 py-0.5 w-[199.2px] h-[325.3px] sm:w-full md:w-[33%] lg:w-[25%]"
      style={{
        WebkitFontSmoothing: "antialiased",
        WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
      }}
      data-view="card"
    >
      <form
        method="post"
        action="/cart/add"
        className="product-form form initialized"
        encType="multipart/form-data"
        noValidate
        data-product-id="product_id"
        data-product-handle="product_handle"
      >
        <div className="sf__pcard-image spc__img-only">
          <div className="overflow-hidden cursor-pointer relative sf__image-box">
            <div className="flex justify-center items-center">
              <a href={productUrl} className="block w-full">
                <div className="spc__main-img">
                  <img
                    className="se-out w-full h-full"
                    src={imageUrl}
                    alt={productName}
                    style={{ aspectRatio: "1 / 1" }}
                  />
                </div>
              </a>
            </div>
            <div className="sf__pcard-tags absolute flex flex-wrap">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className={`py-0.5 px-2 mb-2 mr-2 font-medium rounded-xl text-white prod__tag prod__tag-${tag.toLowerCase()}`}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="sf__pcard-action">
              <div className="sf__pcard-group-action">
                <button
                  className="sf__tooltip-item sf__btn-icon sf-pqv__button sf__tooltip-top sf__tooltip-style-1"
                  type="button"
                >
                  <span className="sf__tooltip-icon block">
                    <svg
                      className="w-[20px] h-[20px]"
                      fill="currentColor"
                      stroke="currentColor"
                      viewBox="0 0 576 512"
                    >
                      <path d="..." />
                    </svg>
                  </span>
                  <span className="sf__tooltip-content">Quick view</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="sf__pcard-content text-center">
          <h3 className="block text-base">
            <a
              href={productUrl}
              className="block mb-[5px] leading-normal sf__pcard-name font-medium truncate-lines hover:text-color-secondary uppercase"
            >
              {productName}
            </a>
          </h3>
          <div className="sf__pcard-price leading-normal">
            <span className="prod__price text-color-regular-price">
              <span className="money">{price}</span>
            </span>
          </div>
        </div>
      </form>
      <div className="background-color-expand"></div>
    </div>
  );
}

export default createProductCard;
