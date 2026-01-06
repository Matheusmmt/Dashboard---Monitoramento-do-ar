import { useState, useMemo } from 'react';
import { useAuth } from '@/contexts/AuthContext';

import { DATABASE, LOCATIONS } from '@/lib/data'; 
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar, Legend
} from 'recharts';
import { 
  Wind, Thermometer, Activity, Droplets, MapPin, LogOut, Sun, Moon,
  RefreshCw
} from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function Dashboard() {
  const { user, logout } = useAuth();
  const [darkMode, setDarkMode] = useState(false);
  const [selectedLocId, setSelectedLocId] = useState('galpao');

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  
  const filteredData = useMemo(() => {

    const sourceData = DATABASE || [];
    return sourceData.filter(item => item.local === selectedLocId);
  }, [selectedLocId]);

  
  const currentStats = useMemo(() => {
    if (filteredData.length === 0) return { temp: 0, hum: 0, co2: 0 };
    return filteredData[filteredData.length - 1]; 
  }, [filteredData]);

  const currentLocationInfo = LOCATIONS.find(l => l.id === selectedLocId);

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors ${darkMode ? 'dark' : ''}`}>
      
      {/* HEADER */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="bg-blue-600 p-2.5 rounded-xl text-white shadow-lg shadow-blue-500/20">
              <Wind size={22} />
            </div>
            <div>
              <h1 className="font-bold text-xl text-slate-900 dark:text-white leading-none">DashBoard - Monitoramento</h1>
              <span className="text-xs text-slate-500 font-medium">LoRaWAN & FIWARE</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            {/* SELETOR DE LOCAL */}
            <Select value={selectedLocId} onValueChange={setSelectedLocId}>
              <SelectTrigger className="w-[200px] bg-white dark:bg-slate-800">
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-slate-500" />
                  <SelectValue placeholder="Selecione o local" />
                </div>
              </SelectTrigger>
              <SelectContent>
                {LOCATIONS.map(loc => (
                  <SelectItem key={loc.id} value={loc.id}>{loc.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            
            <Button variant="ghost" size="sm" onClick={logout} className="text-red-500 hover:bg-red-50">
              <LogOut size={18} />
            </Button>
          </div>
        </div>
      </header>

      {/* CONTEÚDO PRINCIPAL */}
      <main className="p-6 max-w-7xl mx-auto space-y-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              {currentLocationInfo?.name}
              <Badge variant={currentLocationInfo?.status === 'Bom' ? 'default' : 'destructive'} className="ml-2">
                {currentLocationInfo?.status}
              </Badge>
            </h2>
            {/* AQUI USAMOS A VARIÁVEL 'USER' PARA SUMIR O AVISO DE ERRO */}
            <p className="text-slate-500">
              Bem-vindo, {user?.name || 'Visitante Universitário'}. Monitoramento em Tempo Real.
            </p>
          </div>
          <div>
             <Button variant="outline" size="sm" className="gap-2">
              <RefreshCw size={16} /> Atualizar Dados
            </Button>
          </div>
        </div>

        {/* CARDS KPI*/}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-l-4 border-l-blue-500 shadow-sm">
            <CardContent className="p-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">CO2</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold dark:text-white">{currentStats.co2}</span>
                  <span className="text-xs font-medium text-slate-500">ppm</span>
                </div>
              </div>
              <Wind className="text-blue-500" />
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-emerald-500 shadow-sm">
            <CardContent className="p-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Temp</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold dark:text-white">{currentStats.temp}</span>
                  <span className="text-xs font-medium text-slate-500">°C</span>
                </div>
              </div>
              <Thermometer className="text-emerald-500" />
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-cyan-500 shadow-sm">
            <CardContent className="p-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">Umidade</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold dark:text-white">{currentStats.hum}</span>
                  <span className="text-xs font-medium text-slate-500">%</span>
                </div>
              </div>
              <Droplets className="text-cyan-500" />
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-red-500 shadow-sm">
            <CardContent className="p-5 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-500">IQAr</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold dark:text-white">{currentLocationInfo?.aqi}</span>
                </div>
              </div>
              <Activity className="text-red-500" />
            </CardContent>
          </Card>
        </div>

        {/* ABAS COM GRÁFICOS */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white dark:bg-slate-900 border">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="comparative">Análise de Gases</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Histórico de CO2</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={filteredData}>
                        <defs>
                          <linearGradient id="colorCo2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="co2" stroke="#3b82f6" fill="url(#colorCo2)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Clima (Temp vs Umidade)</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={filteredData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                        <XAxis dataKey="time" />
                        <YAxis yAxisId="left" stroke="#10b981" />
                        <YAxis yAxisId="right" orientation="right" stroke="#06b6d4" />
                        <Tooltip />
                        <Legend />
                        <Line yAxisId="left" type="monotone" dataKey="temp" name="Temp" stroke="#10b981" />
                        <Line yAxisId="right" type="monotone" dataKey="hum" name="Umidade" stroke="#06b6d4" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="comparative">
            <Card>
              <CardHeader>
                <CardTitle>Poluentes (CO vs Metano)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={filteredData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                      <XAxis dataKey="time" />
                      <YAxis />
                      <Tooltip cursor={{fill: 'transparent'}} />
                      <Legend />
                      <Bar dataKey="co" name="CO (ppm)" fill="#ef4444" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="ch4" name="Metano" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}