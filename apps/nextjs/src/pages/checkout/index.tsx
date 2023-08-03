import WhatsappRedirectButton from '~/components/WhatsappRedirectButton';
import CheckOutProducts from '~/components/checkoutProducts';
import TotalPrice from '~/components/totalprice';

export default function Checkout() {
  const Text = `
    a
    a
    a
    a
    a
    `;
  const WhatsAppApiUrl = 'https://wa.me/573212971693?text=' + encodeURI(Text);
  return (
    <section>
      <h1 className="sr-only">Checkout</h1>

      <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
        <div className="bg-gray-50 py-12 md:py-24">
          <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
            <div className="flex items-center gap-4">
              <span className="h-10 w-10 rounded-full bg-blue-700"></span>

              <h2 className="font-medium text-gray-900">
                Ya estas a un paso de completar tu pedido.
              </h2>
            </div>

            <TotalPrice />
            <div>
              <p className="mb-3  mt-5 text-sm text-gray-600">For the purchase of</p>
              <CheckOutProducts />
            </div>

            <div>
              <div className="flow-root"></div>
            </div>
          </div>
        </div>

        <div className="bg-white py-12 md:py-24">
          <div className="mx-auto max-w-lg px-4 lg:px-8">
            <form className="grid grid-cols-6 gap-4">
              <div className="col-span-3">
                <label htmlFor="FirstName" className="block text-xs font-medium text-gray-700">
                  First Name
                </label>

                <input
                  type="text"
                  id="FirstName"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <div className="col-span-3">
                <label htmlFor="LastName" className="block text-xs font-medium text-gray-700">
                  Last Name
                </label>

                <input
                  type="text"
                  id="LastName"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="Email" className="block text-xs font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  id="Email"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <div className="col-span-6">
                <label htmlFor="Phone" className="block text-xs font-medium text-gray-700">
                  Phone
                </label>

                <input
                  type="tel"
                  id="Phone"
                  className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                />
              </div>

              <WhatsappRedirectButton WhatsAppApiUrl={WhatsAppApiUrl} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
