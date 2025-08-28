export default function Home() {
  return (
    <main className="bg-background">
      <section className="container mx-auto">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
  <div className="lg:col-span-2">
    <h1 className="text-2xl font-semibold mb-3">
      Classic and Stylish Women's Fashion Wear
    </h1>
    <p className="text-lg text-gray-600 mb-4">
      Explore a stunning collection of women's dresses, including Salwar Kameez, Saree, Abaya, Tops, Kurti,
      and more. From casual to elegant styles, find trendy, comfortable, and high-quality outfits at
      affordable prices. Browse your favorite dresses and stay effortlessly stylish!
    </p>
    <button className="bg-primary text-white py-2 px-4 rounded">All Products</button>
  </div>

  <div className="lg:col-span-3 relative">
    <div className="aspect-[4/3] lg:aspect-[3/2] flex items-center">
      <img
        src="img/02.jpg"
        alt="Two women wearing traditional sarees"
        className="w-full object-cover object-center"
      />
    </div>
  </div>
</div>

      </section>
    </main>
  )
}
