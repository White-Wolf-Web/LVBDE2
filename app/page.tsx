import Introduction from './components/Introduction';
import MassageCardContainer from './components/card/MassageCardContainer';
import GloogleMap from './components/GloogleMap';





export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-3xl md:text-4xl lg:text-5xl mb-8 tracking-tighter">Massage relaxant à Courcelles</h1>
      <h2 className="font-medium text-2xl md:text-3xl lg:text-4xl mb-8 tracking-tighter">Shiatsu Reiki Réflexologie plantaire</h2>
      <p className="prose prose-neutral dark:prose-invert">
       
      </p>

      <Introduction />

<MassageCardContainer />
<GloogleMap />



    </section>
  );
}
