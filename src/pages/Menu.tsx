
import { Separator } from "@/components/ui/separator";

const Menu = () => {
  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold text-coffee mb-8 text-center">Меню</h1>
        <p className="text-muted-foreground text-center mb-12">
          Здесь будет полная страница с нашим меню: кофе, чай, десерты и выпечка
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

export default Menu;
