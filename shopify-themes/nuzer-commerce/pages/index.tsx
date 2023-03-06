import Head from 'next/head'
import Image from 'next/image'
import type { InferGetStaticPropsType } from "next"
import getAllproducts from "@framework/product/get-all-products"
import { getConfig } from "@framework/api/config"
import { Layout, Footer, Navbar } from "@components/common"
import { ProductCard } from "../components/product"
import { Grid, Hero, MarqueeProducts, Sidebar } from "@components/ui"
import { CartSidebar } from '@components/cart'

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllproducts(config)
  return {
    props: {
      products
    },
    revalidate: 4 * 60 * 60
  }
}
export default function Home({
  products
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid>
          { products.slice(0,3).map(product => 
            <ProductCard 
              key={product.id}
              product={product}/>          
          )}
      </Grid>
      <Hero
       headline="Cookies, ice cream and muffin"
       description="Marshmallow tart jelly icing cotton candy tootsie roll cotton candy candy canes. Cake liquorice sesame snaps. Cupcake cake cheesecake pie marshmallow lollipop soufflé marshmallow dessert. Cheesecake jujubes halvah chupa chups lollipop tootsie roll. Jelly-o tiramisu jelly toffee cake croissant lemon drops pudding. Donut sesame snaps gummi bears toffee. Sesame snaps jelly-o oat cake chocolate marzipan cake lollipop. Gingerbread cheesecake jujubes fruitcake cake. Tiramisu cotton candy marzipan candy canes oat cake pudding bonbon."
      />
      <MarqueeProducts variant="secondary">
      { products.slice(0,3).map(product => 
            <ProductCard 
              key={product.id}
              variant="slim"
              product={product}/>          
          )}
      </MarqueeProducts>
    </>
  )
}

Home.Layout = Layout
//     <div>
//     {/* {hasBanner && (
//       <Banner banner={Banner}><div className={`text-center ${styles.header}`}>Kostener Versand in Deutschland</div></Banner>
//     )}
//       <Head>
        
//         <title>Nuzer</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
      
       
//       <div className={styles.header}></div>
//           <h1 className={`text-6xl text-black text-center ${styles.header}`}>Sehen Sie sich unsere <br/>Auswahl an</h1>
//       </div>
//       <div className={styles.headerContainer}>
      

//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <span className={styles.logo}>
//             <Image src="/nuzer_favicon.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a> */}
//     </div>
//   </>
//   )
// }

// Home.Layout = Layout
