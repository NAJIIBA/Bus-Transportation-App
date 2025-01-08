import { Tabs } from 'expo-router'
import { Home, Ticket, Settings } from 'lucide-react-native'

import "../global.css";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#FF6B6B',
          borderTopWidth: 0,
          height: 60,
        },
        tabBarActiveTintColor: '#FFF',
        tabBarInactiveTintColor: 'rgba(255,255,255,0.6)',
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Home size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="tickets"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Ticket size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Settings size={24} color={color} />,
        }}
      />
    </Tabs>
  )
}