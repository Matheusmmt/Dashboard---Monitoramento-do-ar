// src/lib/data.ts

export const LOCATIONS = [
  { id: 'galpao', name: 'Galpão de Laboratórios', type: 'Interno', aqi: 220, status: 'Ruim' },
  { id: 'lab1', name: 'Lab. Eng. Química', type: 'Interno', aqi: 310, status: 'Péssimo' },
  { id: 'corredor', name: 'Corredor Bloco 1', type: 'Externo', aqi: 45, status: 'Bom' },
];


export const DATABASE = [
  // --- GALPÃO ---
  { time: '08:00', co: 1.2, co2: 400, ch4: 5, temp: 24, hum: 60, local: 'galpao' },
  { time: '10:00', co: 2.5, co2: 550, ch4: 8, temp: 26, hum: 58, local: 'galpao' },
  { time: '12:00', co: 4.0, co2: 800, ch4: 12, temp: 29, hum: 55, local: 'galpao' },
  { time: '14:00', co: 3.8, co2: 750, ch4: 10, temp: 30, hum: 53, local: 'galpao' },
  { time: '16:00', co: 2.0, co2: 500, ch4: 6, temp: 28, hum: 57, local: 'galpao' },
  
  // --- LAB 1 ---
  { time: '08:00', co: 5.0, co2: 600, ch4: 20, temp: 22, hum: 45, local: 'lab1' },
  { time: '10:00', co: 8.5, co2: 900, ch4: 35, temp: 23, hum: 44, local: 'lab1' },
  { time: '12:00', co: 12.0, co2: 1200, ch4: 45, temp: 24, hum: 42, local: 'lab1' },
  { time: '14:00', co: 10.0, co2: 1100, ch4: 40, temp: 24, hum: 43, local: 'lab1' },
  { time: '16:00', co: 7.0, co2: 800, ch4: 25, temp: 23, hum: 45, local: 'lab1' },

  // --- CORREDOR ---
  { time: '08:00', co: 0.5, co2: 350, ch4: 2, temp: 26, hum: 70, local: 'corredor' },
  { time: '10:00', co: 0.8, co2: 360, ch4: 3, temp: 28, hum: 65, local: 'corredor' },
  { time: '12:00', co: 1.2, co2: 380, ch4: 4, temp: 31, hum: 60, local: 'corredor' },
  { time: '14:00', co: 1.0, co2: 370, ch4: 3, temp: 32, hum: 58, local: 'corredor' },
  { time: '16:00', co: 0.6, co2: 355, ch4: 2, temp: 29, hum: 65, local: 'corredor' },
];