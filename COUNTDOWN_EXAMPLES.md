# 🕒 Countdown Timer Examples & Usage

## 🎯 What I Built For You

### **1. CountdownTimer Component**
- ✅ **Animated countdown** with Days:Hours:Minutes:Seconds
- ✅ **Auto-completion** when countdown reaches zero
- ✅ **Smooth animations** using Framer Motion
- ✅ **Glassmorphism design** matching your site
- ✅ **Progress bar** showing countdown progress
- ✅ **Customizable** title, subtitle, and target date

### **2. Enhanced Downloads Page**
- ✅ **Toggle between countdown and downloads**
- ✅ **"Get Early Access Now" button** to skip countdown
- ✅ **"Back to Launch Countdown" button** to return
- ✅ **Smooth transitions** between states

## 🚀 How to Use Different Countdown Scenarios

### **Scenario 1: Product Launch (Current Setup)**
```tsx
<CountdownTimer
  targetDate="2025-01-15T00:00:00Z"
  title="xbe.sh v2.0 Coming Soon"
  subtitle="The revolutionary agentic IDE launches soon"
  onComplete={() => {
    // Show downloads when countdown ends
    setShowCountdown(false);
  }}
/>
```

### **Scenario 2: Limited Time Offer**
```tsx
<CountdownTimer
  targetDate="2024-12-31T23:59:59Z"
  title="Early Bird Special"
  subtitle="50% off expires soon!"
  onComplete={() => {
    // Show regular pricing
    setShowOffer(false);
  }}
/>
```

### **Scenario 3: Event Registration**
```tsx
<CountdownTimer
  targetDate="2025-02-01T10:00:00Z"
  title="Webinar Starts In"
  subtitle="Don't miss our exclusive demo"
  onComplete={() => {
    // Redirect to webinar
    window.location.href = '/webinar';
  }}
/>
```

### **Scenario 4: Beta Access**
```tsx
<CountdownTimer
  targetDate="2025-01-01T00:00:00Z"
  title="Beta Opens In"
  subtitle="Be among the first to try xbe.sh"
  onComplete={() => {
    // Show beta signup form
    setShowBetaForm(true);
  }}
/>
```

## 🎨 Customization Options

### **Change Target Date**
```tsx
// Set any future date
targetDate="2025-03-15T14:30:00Z" // March 15, 2025 at 2:30 PM UTC
```

### **Modify Appearance**
```tsx
// In CountdownTimer.tsx, you can customize:
- Colors: Change gradient colors from violet/purple to your brand
- Fonts: Already uses Cal Sans font (font-cal)
- Layout: Modify grid-cols-2 md:grid-cols-4 for different layouts
- Animations: Adjust motion.div properties for different effects
```

### **Different Time Formats**
```tsx
// Show only hours and minutes for short countdowns
const timeUnits = [
  { label: 'Hours', value: timeLeft.hours + (timeLeft.days * 24) },
  { label: 'Minutes', value: timeLeft.minutes },
  { label: 'Seconds', value: timeLeft.seconds }
];
```

## 📱 Mobile Responsiveness

The countdown automatically adapts:
- **Desktop**: 4 columns (Days | Hours | Minutes | Seconds)
- **Mobile**: 2 columns stacked
- **Text sizes**: Responsive from text-4xl to text-5xl
- **Padding**: Adjusts for smaller screens

## 🔧 Advanced Features You Can Add

### **1. Sound Notifications**
```tsx
useEffect(() => {
  if (timeLeft.seconds === 0 && timeLeft.minutes === 0) {
    // Play notification sound
    new Audio('/notification.mp3').play();
  }
}, [timeLeft]);
```

### **2. Email Reminders**
```tsx
const handleNotifyMe = async (email) => {
  await fetch('/api/notify', {
    method: 'POST',
    body: JSON.stringify({ email, targetDate })
  });
};
```

### **3. Social Sharing**
```tsx
const shareCountdown = () => {
  navigator.share({
    title: 'xbe.sh v2.0 Launch',
    text: `Only ${timeLeft.days} days left until xbe.sh v2.0 launches!`,
    url: window.location.href
  });
};
```

### **4. Timezone Support**
```tsx
// Show countdown in user's timezone
const targetDate = new Date('2025-01-15T00:00:00Z').toLocaleString();
```

## 🎯 Current State Controls

In `Downloads.tsx`:
- **`showCountdown`**: Controls whether to show countdown or downloads
- **`countdownComplete`**: Tracks if countdown has finished
- **`setShowCountdown(false)`**: Skip to downloads immediately
- **`setShowCountdown(true)`**: Return to countdown view

## 🚀 Quick Toggle for Testing

To test different states quickly:
```tsx
// In Downloads.tsx, change initial state:
const [showCountdown, setShowCountdown] = useState(false); // Skip to downloads
const [showCountdown, setShowCountdown] = useState(true);  // Show countdown
```

Your countdown timer is now ready to create anticipation and excitement for your xbe.sh launch! 🎉
