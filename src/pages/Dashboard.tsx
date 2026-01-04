import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { SENSOR_HISTORY, LOCATIONS } from '@/lib/data';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area 
} from 'recharts';
import { 
  LayoutDashboard, MapPin, Wind, Thermometer, 
  Activity, Droplets, LogOut, Sun, Moon 
} from 'lucide-react';

// Componentes visuais do shadcn
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export function Dashboard() {
  const { user, logout } = useAuth();
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors ${darkMode ? 'dark' : ''}`}>
      
      {/* Barra Superior */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-6 py-4 flex justify-between items-center sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="bg-blue-600 p-2 rounded-lg text-white">
            <Wind size={20} />
          </div>
          <div>
            <h1 className="font-bold text-xl text-slate-800 dark:text-white leading-none">AirMon Campus</h1>
            <span className="text-xs text-slate-500">LoRaWAN & FIWARE Architecture</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden sm:block text-right">
            <p className="text-sm font-medium text-slate-900 dark:text-white">{user?.name}</p>
            <p className="text-xs text-slate-500 capitalize">{user?.role}</p>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="outline" size="sm" onClick={logout} className="gap-2 text-red-600 hover:text-red-700 hover:bg-red-50">
            <LogOut className="h-4 w-4" /> Sair
          </Button>
        </div>
      </header>

      <main className="p-6 max-w-7xl mx-auto space-y-6">
        
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-l-4 border-l-red-500 shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-red-100 text-red-600 rounded-full dark:bg-red-900/20">
                <Activity className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">IQAr Médio (Galpão)</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">220</h3>
                <span className="text-xs text-red-500 font-bold">CRÍTICO</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-full dark:bg-blue-900/20">
                <Thermometer className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Temperatura</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">28.5°C</h3>
                <span className="text-xs text-slate-400">Sensor DHT11</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-cyan-100 text-cyan-600 rounded-full dark:bg-cyan-900/20">
                <Droplets className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Umidade</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">62%</h3>
                <span className="text-xs text-slate-400">Umidade Relativa</span>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="p-3 bg-purple-100 text-purple-600 rounded-full dark:bg-purple-900/20">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Pontos Ativos</p>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">3/3</h3>
                <span className="text-xs text-green-600 font-bold">Online (LoRa)</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Gráfico Principal */}
          <Card className="lg:col-span-2 shadow-sm">
            <CardHeader>
              <CardTitle>Níveis de CO2 (Galpão)</CardTitle>
              <p className="text-sm text-slate-500">Monitoramento de outliers detectados pelo sensor MQ135</p>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={SENSOR_HISTORY}>
                    <defs>
                      <linearGradient id="colorCo2" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                    <XAxis dataKey="time" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                    />
                    <Area type="monotone" dataKey="co2" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorCo2)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Gráfico Secundário */}
          <Card className="shadow-sm">
            <CardHeader>
              <CardTitle>Gases Nocivos</CardTitle>
              <p className="text-sm text-slate-500">CO vs CH4 (ppm)</p>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={SENSOR_HISTORY}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                    <XAxis dataKey="time" hide />
                    <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                    <Tooltip />
                    <Line type="monotone" dataKey="co" stroke="#ef4444" strokeWidth={2} dot={false} />
                    <Line type="monotone" dataKey="ch4" stroke="#f59e0b" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
                <div className="flex justify-center gap-4 mt-4 text-sm">
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-red-500 rounded-full"></div> CO</div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 bg-yellow-500 rounded-full"></div> CH4</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabela de Locais */}
        <Card className="shadow-sm">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Status dos Ambientes</CardTitle>
                <p className="text-sm text-slate-500">Integração via FIWARE Orion Context Broker</p>
              </div>
              {user?.role === 'admin' && (
                <Button variant="outline" size="sm">Adicionar Sensor</Button>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Local</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Sensores</TableHead>
                  <TableHead>IQAr</TableHead>
                  <TableHead>Status</TableHead>
                  {user?.role === 'admin' && <TableHead className="text-right">Ação</TableHead>}
                </TableRow>
              </TableHeader>
              <TableBody>
                {LOCATIONS.map((loc) => (
                  <TableRow key={loc.id}>
                    <TableCell className="font-medium">{loc.name}</TableCell>
                    <TableCell>{loc.type}</TableCell>
                    <TableCell>
                      <div className="flex gap-1 flex-wrap">
                        {loc.sensors.map(s => (
                          <Badge key={s} variant="secondary" className="text-xs font-normal">
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>{loc.aqi}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className={
                        loc.status === 'Bom' ? 'bg-green-50 text-green-700 border-green-200' :
                        loc.status === 'Moderado' ? 'bg-yellow-50 text-yellow-700 border-yellow-200' :
                        'bg-red-50 text-red-700 border-red-200'
                      }>
                        {loc.status}
                      </Badge>
                    </TableCell>
                    {user?.role === 'admin' && (
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0 text-blue-600">
                          <LayoutDashboard className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}