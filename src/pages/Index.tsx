import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import Icon from '@/components/ui/icon';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

const Index = () => {
  const [date, setDate] = useState<Date>();
  const [selectedVehicle, setSelectedVehicle] = useState('');

  const vehicles = [
    {
      id: 'mercedes',
      name: 'Mercedes-Benz Vito',
      seats: '6-8 мест',
      image: 'https://cdn.poehali.dev/projects/fcef01d0-c69f-40ef-a9a3-b0e7dc9aeb15/files/e6e9a6cb-936c-4562-846b-2635647613ae.jpg',
      features: ['Кондиционер', 'Wi-Fi', 'USB-зарядка', 'Багажник'],
    },
    {
      id: 'volkswagen',
      name: 'Volkswagen Caravelle',
      seats: '7-9 мест',
      image: 'https://cdn.poehali.dev/projects/fcef01d0-c69f-40ef-a9a3-b0e7dc9aeb15/files/da4dfe67-117c-4a1d-9768-4ba95a6e8c44.jpg',
      features: ['Климат-контроль', 'Панорамная крыша', 'Кожаный салон', 'Премиум аудио'],
    },
    {
      id: 'ford',
      name: 'Ford Transit Custom',
      seats: '8-10 мест',
      image: 'https://cdn.poehali.dev/projects/fcef01d0-c69f-40ef-a9a3-b0e7dc9aeb15/files/c75509d0-151a-47a5-ab77-62b29bce6147.jpg',
      features: ['Просторный салон', 'Большой багажник', 'Комфортные сиденья', 'Система безопасности'],
    },
  ];

  const tariffs = [
    { name: 'Аэропорт', price: 'от 3 500 ₽', description: 'Встреча с табличкой, помощь с багажом' },
    { name: 'Город', price: 'от 1 500 ₽', description: 'Поездки по городу, почасовая аренда' },
    { name: 'Межгород', price: 'от 15 ₽/км', description: 'Комфортные междугородние поездки' },
    { name: 'VIP', price: 'от 5 000 ₽', description: 'Премиум-класс с дополнительным сервисом' },
  ];

  const services = [
    { icon: 'UserCheck', title: 'Встреча с табличкой', description: 'Водитель встретит вас с именной табличкой' },
    { icon: 'Luggage', title: 'Помощь с багажом', description: 'Поможем загрузить и разгрузить вещи' },
    { icon: 'Clock', title: 'Всегда вовремя', description: 'Отслеживаем рейсы и пробки' },
    { icon: 'Shield', title: 'Безопасность', description: 'Опытные водители, страхование пассажиров' },
    { icon: 'CreditCard', title: 'Удобная оплата', description: 'Наличные, карта, безналичный расчёт' },
    { icon: 'Phone', title: 'Поддержка 24/7', description: 'Всегда на связи для ваших вопросов' },
  ];

  const reviews = [
    { name: 'Анна Смирнова', rating: 5, text: 'Отличный сервис! Водитель приехал вовремя, помог с багажом. Автомобиль чистый и комфортный.' },
    { name: 'Михаил Петров', rating: 5, text: 'Пользуюсь услугами постоянно для деловых поездок. Всегда пунктуальны и профессиональны.' },
    { name: 'Елена Волкова', rating: 5, text: 'Заказывали минивен для поездки большой компанией. Все на высшем уровне, рекомендую!' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Icon name="Car" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-primary">ТрансферПро</span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors font-medium">
                Главная
              </button>
              <button onClick={() => scrollToSection('fleet')} className="text-foreground hover:text-primary transition-colors font-medium">
                Автопарк
              </button>
              <button onClick={() => scrollToSection('tariffs')} className="text-foreground hover:text-primary transition-colors font-medium">
                Тарифы
              </button>
              <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors font-medium">
                Услуги
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition-colors font-medium">
                Отзывы
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors font-medium">
                Контакты
              </button>
            </nav>
            <Button onClick={() => scrollToSection('booking')} className="hidden md:inline-flex">
              Заказать
            </Button>
          </div>
        </div>
      </header>

      <section id="hero" className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Комфортные трансферы на минивенах
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Надёжный сервис перевозок для групп от 6 до 10 человек. Встреча в аэропорту, междугородние поездки, корпоративные трансферы.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6" onClick={() => scrollToSection('booking')}>
                <Icon name="Calendar" size={20} className="mr-2" />
                Забронировать сейчас
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6" onClick={() => scrollToSection('fleet')}>
                <Icon name="Car" size={20} className="mr-2" />
                Посмотреть автопарк
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="fleet" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наш автопарк</h2>
            <p className="text-xl text-muted-foreground">Современные комфортабельные минивены для ваших поездок</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {vehicles.map((vehicle) => (
              <Card key={vehicle.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 animate-scale-in">
                <div className="aspect-video overflow-hidden">
                  <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{vehicle.name}</CardTitle>
                  <CardDescription className="text-lg flex items-center gap-2">
                    <Icon name="Users" size={18} />
                    {vehicle.seats}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {vehicle.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Тарифы</h2>
            <p className="text-xl text-muted-foreground">Прозрачные цены без скрытых доплат</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tariffs.map((tariff) => (
              <Card key={tariff.name} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="text-2xl">{tariff.name}</CardTitle>
                  <CardDescription className="text-3xl font-bold text-primary">{tariff.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{tariff.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Всё для вашего комфорта и безопасности</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="flex gap-4 p-6 rounded-lg bg-card hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name={service.icon as any} size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нас наши пассажиры</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <Card key={review.name} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardTitle>{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Форма заказа</h2>
              <p className="text-xl text-muted-foreground">Заполните форму, и мы свяжемся с вами в ближайшее время</p>
            </div>
            <Card className="shadow-2xl">
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Ваше имя</Label>
                      <Input id="name" placeholder="Иван Иванов" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Телефон</Label>
                      <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="from">Откуда</Label>
                      <Input id="from" placeholder="Адрес подачи" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="to">Куда</Label>
                      <Input id="to" placeholder="Адрес назначения" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label>Дата</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button variant="outline" className="w-full justify-start text-left font-normal">
                            <Icon name="Calendar" size={16} className="mr-2" />
                            {date ? format(date, 'PPP', { locale: ru }) : 'Выберите дату'}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="time">Время</Label>
                      <Input id="time" type="time" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="passengers">Пассажиров</Label>
                      <Input id="passengers" type="number" min="1" max="10" placeholder="6" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vehicle">Выберите автомобиль</Label>
                    <div className="grid grid-cols-3 gap-2">
                      {vehicles.map((vehicle) => (
                        <Button
                          key={vehicle.id}
                          type="button"
                          variant={selectedVehicle === vehicle.id ? 'default' : 'outline'}
                          className="h-auto py-3 px-2 flex-col text-xs"
                          onClick={() => setSelectedVehicle(vehicle.id)}
                        >
                          <Icon name="Car" size={20} className="mb-1" />
                          {vehicle.name.split(' ')[0]}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="comment">Комментарий</Label>
                    <Textarea id="comment" placeholder="Дополнительные пожелания к заказу" rows={3} />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Мы всегда на связи</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Телефон</h3>
                <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                <p className="text-sm text-muted-foreground mt-1">Круглосуточно</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" size={32} className="text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">info@transferpro.ru</p>
                <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Адрес</h3>
                <p className="text-muted-foreground">Москва, ул. Примерная, 1</p>
                <p className="text-sm text-muted-foreground mt-1">Офис работает 9:00-21:00</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Car" size={32} />
              <span className="text-2xl font-bold">ТрансферПро</span>
            </div>
            <p className="text-center text-background/80">© 2024 ТрансферПро. Все права защищены.</p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-background hover:text-background hover:bg-background/20">
                <Icon name="Phone" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-background hover:bg-background/20">
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
