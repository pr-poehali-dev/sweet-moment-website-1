
import { Separator } from "@/components/ui/separator";

const Contact = () => {
  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="text-3xl md:text-4xl font-bold text-coffee mb-8 text-center">Контакты</h1>
        <p className="text-muted-foreground text-center mb-12">
          Здесь будет страница с адресом, картой, телефоном и формой для связи
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

export default Contact;
