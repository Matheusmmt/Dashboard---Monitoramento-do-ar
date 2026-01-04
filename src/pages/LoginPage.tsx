import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Wind, Lock, User } from 'lucide-react';

export function LoginPage() {
  const { login } = useAuth();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAdminLogin = () => {
    if (password === 'admin123') {
      login('admin');
    } else {
      setError('Senha incorreta (Dica: admin123)');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Logo e Título */}
        <div className="text-center">
          <div className="mx-auto h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <Wind className="h-6 w-6 text-blue-600" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Monitoramento de Ar</h1>
          <p className="text-slate-500 mt-2">Campus Universitário (LoRaWAN + FIWARE)</p>
        </div>

        {/* Card de Login */}
        <Card>
          <CardHeader>
            <CardTitle>Acessar Painel</CardTitle>
            <CardDescription>Escolha seu nível de acesso abaixo</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="visitor" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="visitor">Visitante</TabsTrigger>
                <TabsTrigger value="admin">Admin</TabsTrigger>
              </TabsList>

              {/* Aba Visitante */}
              <TabsContent value="visitor">
                <div className="space-y-4 pt-4">
                  <div className="bg-blue-50 text-blue-700 p-4 rounded-md text-sm flex gap-2 items-start">
                    <User className="h-5 w-5 mt-0.5" />
                    <p>Acesso público para visualização de índices IQAr, gráficos e status dos sensores.</p>
                  </div>
                  <Button className="w-full" size="lg" onClick={() => login('visitor')}>
                    Entrar como Visitante
                  </Button>
                </div>
              </TabsContent>

              {/* Aba Admin */}
              <TabsContent value="admin">
                <div className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Senha de Acesso</label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-400" />
                      <Input 
                        type="password" 
                        placeholder="••••••••" 
                        className="pl-9"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setError('');
                        }}
                      />
                    </div>
                    {error && <p className="text-sm text-red-500 font-medium">{error}</p>}
                  </div>
                  <Button className="w-full" size="lg" onClick={handleAdminLogin}>
                    Acessar Painel Admin
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}