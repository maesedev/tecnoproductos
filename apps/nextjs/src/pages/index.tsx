/* eslint-disable @next/next/no-img-element */
import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { useSession } from 'next-auth/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Slider, SliderImage } from '~/components/Slider/slider';
import { useGetData } from '../../hooks/useGetData';
import Categorias from '../components/categories';
import Product from '../components/product';

type HomeProps = {};

const Home: NextPage = (_props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const Products = useGetData();
  const { data: Session } = useSession();

  return (
    <section className="box-content flex flex-col items-center ">
      <Slider>
        <SliderImage src="/assets/spaceship.jpg" />
        <SliderImage src="/assets/spaceship.svg" />
      </Slider>
      {Session ? (
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-center text-3xl">Hola {Session.user.name}</h1>
          <img
            className="rounded-full border-[3px] border-pink-500 "
            src={`${Session.user.image}`}
            alt={`Avatar de ${Session.user.name}`}
          />
        </div>
      ) : (
        <></>
      )}
      <Categorias />

      <div className="py">
        <p className="mt-6 text-center text-5xl font-bold">Todo en tecnología</p>
        <h2 className="mb-10 text-center text-lg font-semibold">
          Encuentra los mejores audífonos y accesorios tecnológicos aquí.
        </h2>
      </div>

      <div className="flex max-w-5xl flex-col flex-wrap justify-center gap-6 py-6 sm:flex-row">
        {Products.map((item, index) =>
          item.invisible ? (
            <></>
          ) : (
            <Product
              key={index}
              id={item.id}
              description={item.tagline}
              mainImageURL={item.mainImage}
              price={item.price}
              title={item.title}
            />
          ),
        )}
      </div>
    </section>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['nextjs'])),
  },
});

export default Home;
