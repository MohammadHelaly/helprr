import { Tabs } from 'expo-router';
import { SymbolView } from 'expo-symbols';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: 'grey',
        tabBarStyle: {
          height: 100,
          paddingTop: 10,
          paddingBottom: 16,
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: '#ffffff',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <SymbolView name="house.fill" size={size} tintColor={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="listen"
        options={{
          title: 'Listen',
          tabBarIcon: ({ color, size }) => (
            <SymbolView name="ear" size={size} tintColor={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="see"
        options={{
          title: 'See',
          tabBarIcon: ({ color, size }) => (
            <SymbolView name="eye" size={size} tintColor={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <SymbolView name="gearshape.fill" size={size} tintColor={color} />
          ),
        }}
      />
    </Tabs>
  );
}
