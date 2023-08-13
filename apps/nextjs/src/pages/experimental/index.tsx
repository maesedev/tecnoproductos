import { api } from '../../utils/api';

export default function experimental() {
  const { mutate: createProduct } = api.product.create.useMutation({
    onSuccess: () => {
      console.log('Creado');
    },
  });
  const { data: products } = api.product.all.useQuery({
    limit: 2,
  });

  console.log(products);

  const handleCreateProduct = () => {
    createProduct({
      name: 'my primer producto',
      description: 'Una descripcion perrona',
      category: 'Audifonos',
      price: 50000,
      discountPrice: 0,
      stock: 2,
      image: 'myurl.com/my-image',
      manufacturer: 'Tesla',
      modelNumber: 'TWS',
      technicalSpecifications: 'none',
      averageRating: 3.5,
      link: 'tecnoprod',
      tags: ['loco no?'],
    });
  };
  return (
    <>
      <h1>change</h1>
      {products ? <p>{products.name}</p> : <p>Fetching data...</p>}
      <button className="block bg-green-600 px-4 py-2 " onClick={handleCreateProduct}>
        Create test product
      </button>
    </>
  );
}
