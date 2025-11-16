import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface Video {
  id: number;
  title: string;
  author: string;
  authorAvatar: string;
  thumbnail: string;
  views: string;
  likes: string;
  duration: string;
  isSubscribed: boolean;
}

interface Creator {
  id: number;
  name: string;
  avatar: string;
  subscribers: string;
  totalViews: string;
  revenue: string;
  isSubscribed: boolean;
}

const Index = () => {
  const [videos, setVideos] = useState<Video[]>([
    {
      id: 1,
      title: 'Кинематографический шедевр: Путешествие сквозь время',
      author: 'Александр Иванов',
      authorAvatar: '/placeholder.svg',
      thumbnail: '/placeholder.svg',
      views: '2.3M',
      likes: '145K',
      duration: '12:34',
      isSubscribed: false,
    },
    {
      id: 2,
      title: 'Секреты создания атмосферного видео',
      author: 'Мария Петрова',
      authorAvatar: '/placeholder.svg',
      thumbnail: '/placeholder.svg',
      views: '890K',
      likes: '67K',
      duration: '8:21',
      isSubscribed: true,
    },
    {
      id: 3,
      title: 'Эпичная история одного кадра',
      author: 'Дмитрий Смирнов',
      authorAvatar: '/placeholder.svg',
      thumbnail: '/placeholder.svg',
      views: '1.5M',
      likes: '92K',
      duration: '15:47',
      isSubscribed: false,
    },
  ]);

  const [creators] = useState<Creator[]>([
    {
      id: 1,
      name: 'Александр Иванов',
      avatar: '/placeholder.svg',
      subscribers: '850K',
      totalViews: '12.5M',
      revenue: '₽ 342,500',
      isSubscribed: false,
    },
    {
      id: 2,
      name: 'Мария Петрова',
      avatar: '/placeholder.svg',
      subscribers: '520K',
      totalViews: '8.2M',
      revenue: '₽ 218,300',
      isSubscribed: true,
    },
    {
      id: 3,
      name: 'Дмитрий Смирнов',
      avatar: '/placeholder.svg',
      subscribers: '1.2M',
      totalViews: '18.7M',
      revenue: '₽ 475,900',
      isSubscribed: false,
    },
  ]);

  const toggleSubscribe = (videoId: number) => {
    setVideos(videos.map(v => 
      v.id === videoId ? { ...v, isSubscribed: !v.isSubscribed } : v
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Icon name="Film" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CineFlow
            </h1>
          </div>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Icon name="Search" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Bell" size={20} />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>АИ</AvatarFallback>
            </Avatar>
          </nav>
        </div>
      </header>

      <main className="container px-4 py-8">
        <Tabs defaultValue="feed" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="feed">Лента</TabsTrigger>
            <TabsTrigger value="creators">Авторы</TabsTrigger>
            <TabsTrigger value="earnings">Заработок</TabsTrigger>
          </TabsList>

          <TabsContent value="feed" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {videos.map((video) => (
                <Card
                  key={video.id}
                  className="group overflow-hidden border-border bg-card transition-all hover:scale-[1.02] hover:shadow-2xl hover:shadow-primary/20"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <Badge className="absolute bottom-3 right-3 bg-black/60 text-white backdrop-blur">
                      {video.duration}
                    </Badge>
                    <Button
                      size="icon"
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100"
                      variant="default"
                    >
                      <Icon name="Play" size={24} />
                    </Button>
                  </div>
                  <div className="p-4">
                    <h3 className="mb-2 line-clamp-2 text-lg font-semibold">
                      {video.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={video.authorAvatar} />
                          <AvatarFallback>{video.author[0]}</AvatarFallback>
                        </Avatar>
                        <div className="text-sm">
                          <p className="font-medium">{video.author}</p>
                          <p className="text-muted-foreground">{video.views} просмотров</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <Button
                        size="sm"
                        variant={video.isSubscribed ? 'secondary' : 'default'}
                        onClick={() => toggleSubscribe(video.id)}
                        className="flex-1"
                      >
                        {video.isSubscribed ? 'Подписан' : 'Подписаться'}
                      </Button>
                      <Button size="sm" variant="outline">
                        <Icon name="Heart" size={16} className="mr-1" />
                        {video.likes}
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="creators" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {creators.map((creator) => (
                <Card
                  key={creator.id}
                  className="overflow-hidden border-border bg-card p-6 transition-all hover:shadow-xl hover:shadow-primary/10"
                >
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-24 w-24 mb-4 ring-4 ring-primary/20">
                      <AvatarImage src={creator.avatar} />
                      <AvatarFallback className="text-2xl">{creator.name[0]}</AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold mb-2">{creator.name}</h3>
                    <div className="flex gap-4 mb-4 text-sm text-muted-foreground">
                      <div>
                        <Icon name="Users" size={14} className="inline mr-1" />
                        {creator.subscribers}
                      </div>
                      <div>
                        <Icon name="Eye" size={14} className="inline mr-1" />
                        {creator.totalViews}
                      </div>
                    </div>
                    <Button
                      variant={creator.isSubscribed ? 'secondary' : 'default'}
                      className="w-full"
                    >
                      {creator.isSubscribed ? 'Подписан' : 'Подписаться'}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="earnings" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Icon name="DollarSign" className="text-primary" size={24} />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground">Общий доход</h3>
                </div>
                <p className="text-3xl font-bold">₽ 1,036,700</p>
                <p className="text-sm text-muted-foreground mt-2">+12.5% за месяц</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-secondary/10 to-transparent border-secondary/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-secondary/20">
                    <Icon name="TrendingUp" className="text-secondary" size={24} />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground">Просмотры</h3>
                </div>
                <p className="text-3xl font-bold">39.4M</p>
                <p className="text-sm text-muted-foreground mt-2">+8.3% за месяц</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-accent/10 to-transparent border-accent/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-accent/20">
                    <Icon name="Users" className="text-accent" size={24} />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground">Подписчики</h3>
                </div>
                <p className="text-3xl font-bold">2.57M</p>
                <p className="text-sm text-muted-foreground mt-2">+5.1% за месяц</p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Icon name="Video" className="text-primary" size={24} />
                  </div>
                  <h3 className="text-sm font-medium text-muted-foreground">Видео</h3>
                </div>
                <p className="text-3xl font-bold">247</p>
                <p className="text-sm text-muted-foreground mt-2">+3 за месяц</p>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-6">Топ авторов по доходам</h3>
              <div className="space-y-4">
                {creators
                  .sort((a, b) => parseFloat(b.revenue.replace(/[^\d]/g, '')) - parseFloat(a.revenue.replace(/[^\d]/g, '')))
                  .map((creator, index) => (
                    <div
                      key={creator.id}
                      className="flex items-center justify-between p-4 rounded-lg bg-muted/30 transition-all hover:bg-muted/50"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 font-bold text-primary">
                          {index + 1}
                        </div>
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={creator.avatar} />
                          <AvatarFallback>{creator.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{creator.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {creator.subscribers} подписчиков
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-primary">{creator.revenue}</p>
                        <p className="text-sm text-muted-foreground">за месяц</p>
                      </div>
                    </div>
                  ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
