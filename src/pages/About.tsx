
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold text-coffee mb-8 text-center">О нас</h1>
        <p className="text-muted-foreground text-center mb-12">
          Здесь будет полная страница с историей нашей кофейни и фотографиями команды и интерьера
        </p>
        <Separator className="my-8" />
        <div className="flex justify-center">
          <a href="/" className="text-coffee hover:text-coffee-dark underline">
            Вернуться на главную
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
