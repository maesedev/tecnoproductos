/* eslint-disable @typescript-eslint/no-unsafe-assignment */
'use client';

import Image from 'next/image';
import { useRouter } from 'next/router';
import AddToCartButton from '~/components/AddToCartButton';
import NoProductSection from '~/components/noproduct';
import { useGetProduct } from '../../../../hooks/useGetProduct';

export default function ProductPage() {
  const { query } = useRouter();
  const Product = useGetProduct(parseFloat(`${query.id}`));

  if (!Product || Product?.invisible) {
    console.log('Error 404');

    return <></>;
  }

  const Price = '$' + Product.price.toLocaleString('es-ES') + ',00';

  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1 ">
            <Image
              priority
              alt="Les Paul"
              src={Product.mainImage}
              className="aspect-square w-full cursor-pointer rounded-xl object-contain transition-all hover:scale-105  hover:opacity-80"
            />

            <div className="grid grid-cols-2 gap-4 lg:mt-4">
              <Image
                alt="Les Paul"
                src={Product.images[0]}
                className="aspect-square w-full cursor-pointer rounded-xl  object-contain transition-all hover:scale-105 hover:opacity-80"
              />

              {Product.images[1] ? (
                <Image
                  alt="Les Paul"
                  src={Product.images[1]}
                  className="aspect-square w-full cursor-pointer rounded-xl  object-contain transition-all hover:scale-105 hover:opacity-80"
                />
              ) : (
                <></>
              )}
              {Product.images[2] ? (
                <Image
                  alt="Les Paul"
                  src={Product.images[2]}
                  className="aspect-square w-full cursor-pointer rounded-xl  object-contain transition-all hover:scale-105 hover:opacity-80"
                />
              ) : (
                <></>
              )}
              {Product.images[3] ? (
                <Image
                  alt="Les Paul"
                  src={Product.images[3]}
                  className="aspect-square w-full cursor-pointer rounded-xl  object-contain transition-all hover:scale-105 hover:opacity-80"
                />
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="sticky top-0">
            <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
              Pre Order
            </strong>

            <div className="mt-8 flex justify-between">
              <div className="max-w-[35ch] space-y-2">
                <h1 className="text-xl font-bold sm:text-2xl">{Product.title}</h1>

                <p className="text-sm">Highest Rated Product</p>

                <div className="-ms-0.5 flex">
                  {[1, 1, 1, 1, 0].map((item, index) => (
                    <svg
                      key={index}
                      className={'h-5 w-5' + (item == 1 ? ' text-yellow-400' : ' text-gray-200')}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <p className="text-lg font-bold">{Price}</p>
            </div>

            <div className="mt-4">
              <div className="prose max-w-none">
                <p>{Product.tagline}</p>
              </div>

              <button className="mt-2 text-sm font-medium underline">Leer más</button>
            </div>

            <form className="mt-8">
              <fieldset>
                <legend className="mb-1 text-sm font-medium">Color</legend>

                <div className="flex flex-wrap gap-1">
                  {Product.colors?.map((item, index) => (
                    <label key={index} htmlFor="color_tt" className="cursor-pointer">
                      <input type="radio" name="color" id="color_tt" className="peer sr-only" />

                      <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                        {item}
                      </span>
                    </label>
                  ))}
                </div>
              </fieldset>
              {/*             ---- Sizes UI  ------

                            <fieldset className="mt-4">
                                <legend className="mb-1 text-sm font-medium">Size</legend>

                                <div className="flex flex-wrap gap-1">
                                    <label htmlFor="size_xs" className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="size"
                                            id="size_xs"
                                            className="peer sr-only"
                                        />

                                        <span
                                            className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                        >
                                            XS
                                        </span>
                                    </label>

                                    <label htmlFor="size_s" className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="size"
                                            id="size_s"
                                            className="peer sr-only"
                                        />

                                        <span
                                            className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                        >
                                            S
                                        </span>
                                    </label>

                                    <label htmlFor="size_m" className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="size"
                                            id="size_m"
                                            className="peer sr-only"
                                        />

                                        <span
                                            className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                        >
                                            M
                                        </span>
                                    </label>

                                    <label htmlFor="size_l" className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="size"
                                            id="size_l"
                                            className="peer sr-only"
                                        />

                                        <span
                                            className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                        >
                                            L
                                        </span>
                                    </label>

                                    <label htmlFor="size_xl" className="cursor-pointer">
                                        <input
                                            type="radio"
                                            name="size"
                                            id="size_xl"
                                            className="peer sr-only"
                                        />

                                        <span
                                            className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white"
                                        >
                                            XL
                                        </span>
                                    </label>
                                </div>
                            </fieldset> 

*/}
              <AddToCartButton Product={Product} />
              <div className="flex w-full justify-center">
                <a
                  className="m-5 inline-block rounded-lg bg-pink-600 px-8 py-3 text-white hover:scale-95 hover:bg-pink-500"
                  href="/checkout"
                >
                  Ir al checkout
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
