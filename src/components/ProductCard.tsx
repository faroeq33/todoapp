import Button from "./Button";
import ShoppingCartIcon from "./ShoppingCartIcon";
import CategoryText from "./CategoryText";
import Paragraph from "./typography/Paragraph";
import Heading2 from "./typography/Heading2";

function ProductCard() {
  const product = {
    category: "Perfume",
    name: "Gabrielle Essence Eau De Parfum",
    description:
      "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
    price: 149.99,
    discountPrice: 169.99,
  };

  return (
    <>
      <div className="flex flex-col items-stretch shadow-lg rounded-xl lg:flex-row dark:text-primary-cream dark:bg-gray-700">
        <div className="w-full lg:w-1/2">
          <img
            src="src/assets/images/image-product-mobile.jpg"
            alt="Chanel Perfume"
            className="object-cover h-full rounded-tl-lg rounded-tr-lg lg:rounded-l-lg lg:rounded-tr-none"
          />
        </div>

        <div className="w-full px-4 pb-4 space-y-4 text-left lg:w-1/2 lg:pt-4 cardbody">
          <div className="flex-none lg:flex-1">
            <CategoryText children={product.category} />
          </div>
          <Heading2>{product.name}</Heading2>

          <Paragraph>{product.description}</Paragraph>

          <ul className="flex items-center gap-4">
            <li className="text-4xl font-bold font-custom text-primary-dark-cyan dark:text-primary-dark-cyan">
              ${product.price}
            </li>
            <li>
              <span className="line-through font-custom text-neutral-dark-grayish-blue dark:text-primary-cream">
                ${product.discountPrice}
              </span>
            </li>
          </ul>

          <Button>
            <ShoppingCartIcon className="w-6 h-6" />
            <span>Add to Cart</span>
          </Button>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
