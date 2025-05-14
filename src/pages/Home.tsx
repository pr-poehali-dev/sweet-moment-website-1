
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Home = () => {
  const features = [
    {
      title: "Свежая выпечка",
      description: "Наши десерты готовятся каждый день из натуральных продуктов",
      icon: "Cake"
    },
    {
      title: "Уютная атмосфера",
      description: "Идеальное место для встреч с друзьями и отдыха с семьей",
      icon: "Coffee"
    },
    {
      title: "Качественный кофе",
      description: "Мы используем только лучшие сорта арабики со всего мира",
      icon: "Leaf"
    }
  ];
  
  const testimonials = [
    {
      text: "Самая уютная кофейня в городе! Изумительные десерты и превосходный кофе. Всегда прихожу сюда, чтобы насладиться спокойной атмосферой и вкусным латте.",
      author: "Мария Иванова",
      role: "Постоянный гость"
    },
    {
      text: "Бесподобные эклеры и раф с лавандой! Интерьер выполнен со вкусом, а персонал всегда приветлив. Рекомендую это место всем, кто ценит качественный кофе.",
      author: "Алексей Смирнов",
      role: "Фуд-блогер"
    },
    {
      text: "Мое любимое место для удаленной работы. Здесь всегда хороший WiFi, вкусный кофе и потрясающие круассаны. Приятно, что бариста помнит мои предпочтения.",
      author: "Екатерина Петрова",
      role: "Фрилансер"
    }
  ];
  
  const stats = [
    {
      value: "42,500+",
      label: "Чашек кофе сварили",
      icon: "Coffee"
    },
    {
      value: "16,200+",
      label: "Довольных клиентов",
      icon: "Heart"
    },
    {
      value: "8,700+",
      label: "Десертов подали",
      icon: "Cake"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/10 z-10"></div>
        <div 
          className="h-[80vh] bg-cover bg-center" 
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80")' }}
        ></div>
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container-custom">
            <div className="max-w-2xl text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
                Сладкий Момент
              </h1>
              <p className="text-xl md:text-2xl mb-8 animate-fade-in">
                Свежая выпечка и ароматный кофе каждый день
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                <Link to="/menu">
                  <Button variant="default" className="bg-coffee hover:bg-coffee-dark">
                    Посмотреть меню
                  </Button>
                </Link>
                <Link to="/contact">
                  {/* Изменена кнопка на вариант coffee с коричневым текстом */}
                  <Button variant="coffee">
                    Как нас найти
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-cream-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-coffee mb-4">Добро пожаловать в нашу кофейню</h2>
            <p className="text-coffee-dark max-w-2xl mx-auto">
              Мы создали уютное место, где вы можете насладиться вкусным кофе, свежей выпечкой и 
              приятной атмосферой в самом центре города.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 bg-cream rounded-full flex items-center justify-center mb-4">
                      <Icon name={feature.icon} className="text-coffee h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-coffee">{feature.title}</h3>
                    <p className="text-coffee-dark">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - Новая секция со счетчиками */}
      <section className="py-14 bg-coffee text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-3 bg-white/10 rounded-full p-3">
                  <Icon name={stat.icon} className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-cream-light">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Обновленная с несколькими отзывами */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-coffee mb-12 text-center">Отзывы наших гостей</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-cream-light p-6 rounded-lg shadow-md">
                <div className="relative mb-6">
                  <div className="absolute -top-4 -left-2 text-4xl text-cream-dark opacity-50">"</div>
                  <p className="italic text-coffee-dark relative z-10 pt-2">
                    {testimonial.text}
                  </p>
                  <div className="absolute -bottom-4 -right-2 text-4xl text-cream-dark opacity-50 rotate-180">"</div>
                </div>
                <div className="mt-4">
                  <p className="font-medium text-coffee">{testimonial.author}</p>
                  <p className="text-sm text-coffee-dark">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-coffee">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-bold text-white mb-2">Ждем вас в гости!</h2>
              <p className="text-cream-light">
                Ул. Центральная, 15 • Ежедневно с 8:00 до 21:00
              </p>
            </div>
            <Link to="/contact">
              <Button variant="secondary" className="bg-cream text-coffee hover:bg-cream-dark">
                Посмотреть на карте
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
