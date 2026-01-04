// src/lib/data.ts

export interface SensorData {
  time: string;
  co: number;
  co2: number;
  o3: number;
  ch4: number;
  local: string;
}

export interface LocationStatus {
  id: number;
  name: string;
  type: 'Interno' | 'Externo';
  aqi: number;
  status: 'Bom' | 'Moderado' | 'Ruim' | 'Péssimo';
  sensors: string[];
}

// ATENÇÃO: O nome aqui DEVE ser SENSOR_HISTORY
export const SENSOR_HISTORY: SensorData[] = [
  { time: '09:00', co: 1.5, co2: 180, o3: 4, ch4: 10, local: 'Galpão' },
  { time: '11:00', co: 4.2, co2: 210, o3: 6, ch4: 12, local: 'Galpão' },
  { time: '13:00', co: 25.0, co2: 250, o3: 5, ch4: 15, local: 'Galpão' },
  { time: '15:00', co: 3.0, co2: 190, o3: 9, ch4: 11, local: 'Galpão' },
  { time: '17:00', co: 2.8, co2: 185, o3: 3, ch4: 10, local: 'Galpão' },
];

export const LOCATIONS: LocationStatus[] = [
  { 
    id: 1, 
    name: 'Galpão de Laboratórios', 
    type: 'Interno', 
    aqi: 220, 
    status: 'Ruim', 
    sensors: ['MQ9', 'MQ131', 'MQ135', 'DHT11'] 
  },
  { 
    id: 2, 
    name: 'Laboratório de Eng. Química', 
    type: 'Interno', 
    aqi: 310, 
    status: 'Péssimo', 
    sensors: ['MQ9', 'MQ135', 'DHT11'] 
  },
  { 
    id: 3, 
    name: 'Corredor Bloco 1', 
    type: 'Externo', 
    aqi: 45, 
    status: 'Bom', 
    sensors: ['MQ135', 'DHT11'] 
  },
];