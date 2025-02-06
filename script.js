// Medical terms data with 30 symptoms
const medicalTerms = {
    // Bengali Symptoms (30)
    "মাথা ব্যথা": { bn: "মাথা ব্যথা", english: "Headache" },
    "বুক ব্যথা": { bn: "বুক ব্যথা", english: "Chest Pain" },
    "কাশি": { bn: "কাশি", english: "Cough" },
    "শ্বাসকষ্ট": { bn: "শ্বাসকষ্ট", english: "Shortness of Breath" },
    "জ্বর": { bn: "জ্বর", english: "Fever" },
    "বমি": { bn: "বমি", english: "Vomiting" },
    "ডায়রিয়া": { bn: "ডায়রিয়া", english: "Diarrhea" },
    "পেটে ব্যথা": { bn: "পেটে ব্যথা", english: "Abdominal Pain" },
    "ক্লান্তি": { bn: "ক্লান্তি", english: "Fatigue" },
    "ঘাম": { bn: "ঘাম", english: "Sweating" },
    "চুলকানি": { bn: "চুলকানি", english: "Itching" },
    "চোখ লাল": { bn: "চোখ লাল", english: "Red Eyes" },
    "গলা ব্যথা": { bn: "গলা ব্যথা", english: "Sore Throat" },
    "নাক দিয়ে পানি পড়া": { bn: "নাক দিয়ে পানি পড়া", english: "Runny Nose" },
    "মাথা ঘোরা": { bn: "মাথা ঘোরা", english: "Dizziness" },
    "হাত পা ফোলা": { bn: "হাত পা ফোলা", english: "Swelling in Limbs" },
    "প্রস্রাবে জ্বালাপোড়া": { bn: "প্রস্রাবে জ্বালাপোড়া", english: "Burning Urination" },
    "কোষ্ঠকাঠিন্য": { bn: "কোষ্ঠকাঠিন্য", english: "Constipation" },
    "বদহজম": { bn: "বদহজম", english: "Indigestion" },
    "পিঠে ব্যথা": { bn: "পিঠে ব্যথা", english: "Back Pain" },
    "জয়েন্টে ব্যথা": { bn: "জয়েন্টে ব্যথা", english: "Joint Pain" },
    "মাথা ঘামা": { bn: "মাথা ঘামা", english: "Night Sweats" },
    "ওজন কমা": { bn: "ওজন কমা", english: "Weight Loss" },
    "ওজন বাড়া": { bn: "ওজন বাড়া", english: "Weight Gain" },
    "অবসাদ": { bn: "অবসাদ", english: "Depression" },
    "অনিদ্রা": { bn: "অনিদ্রা", english: "Insomnia" },
    "হাত পা অবশ": { bn: "হাত পা অবশ", english: "Numbness in Limbs" },
    "চোখে ঝাপসা দেখা": { bn: "চোখে ঝাপসা দেখা", english: "Blurred Vision" },
    "কানে ব্যথা": { bn: "কানে ব্যথা", english: "Ear Pain" },
    "দাঁতে ব্যথা": { bn: "দাঁতে ব্যথা", english: "Toothache" },

    // Myanmar Symptoms (30)
    "ခေါင်းကိုက်": { my: "ခေါင်းကိုက်", english: "Headache" },
    "ရင်ဘတ်နာ": { my: "ရင်ဘတ်နာ", english: "Chest Pain" },
    "ချောင်းဆိုး": { my: "ချောင်းဆိုး", english: "Cough" },
    "အသက်ရှုကြပ်": { my: "အသက်ရှုကြပ်", english: "Shortness of Breath" },
    "ဖျားခြင်း": { my: "ဖျားခြင်း", english: "Fever" },
    "အန်ခြင်း": { my: "အန်ခြင်း", english: "Vomiting" },
    "ဝမ်းလျှောခြင်း": { my: "ဝမ်းလျှောခြင်း", english: "Diarrhea" },
    "ဗိုက်နာ": { my: "ဗိုက်နာ", english: "Abdominal Pain" },
    "ပင်ပန်းနွမ်းနယ်": { my: "ပင်ပန်းနွမ်းနယ်", english: "Fatigue" },
    "ချွေးထွက်များ": { my: "ချွေးထွက်များ", english: "Sweating" },
    "ယားယံ": { my: "ယားယံ", english: "Itching" },
    "မျက်လုံးနီ": { my: "မျက်လုံးနီ", english: "Red Eyes" },
    "လည်ချောင်းနာ": { my: "လည်ချောင်းနာ", english: "Sore Throat" },
    "နှာရည်ယို": { my: "နှာရည်ယို", english: "Runny Nose" },
    "ခေါင်းမူး": { my: "ခေါင်းမူး", english: "Dizziness" },
    "လက်နှင့်ခြေထောက်ဖောရောင်ခြင်း": { my: "လက်နှင့်ခြေထောက်ဖောရောင်ခြင်း", english: "Swelling in Limbs" },
    "ဆီးသွားစဉ်ပူစပ်ခြင်း": { my: "ဆီးသွားစဉ်ပူစပ်ခြင်း", english: "Burning Urination" },
    "ဝမ်းချုပ်": { my: "ဝမ်းချုပ်", english: "Constipation" },
    "အစာမကြေ": { my: "အစာမကြေ", english: "Indigestion" },
    "နောက်ကျောနာ": { my: "နောက်ကျောနာ", english: "Back Pain" },
    "အဆစ်နာ": { my: "အဆစ်နာ", english: "Joint Pain" },
    "ညဘက်ချွေးထွက်များ": { my: "ညဘက်ချွေးထွက်များ", english: "Night Sweats" },
    "ကိုယ်အလေးချိန်ကျ": { my: "ကိုယ်အလေးချိန်ကျ", english: "Weight Loss" },
    "ကိုယ်အလေးချိန်တက်": { my: "ကိုယ်အလေးချိန်တက်", english: "Weight Gain" },
    "စိတ်ဓာတ်ကျ": { my: "စိတ်ဓာတ်ကျ", english: "Depression" },
    "အိပ်မပျော်": { my: "အိပ်မပျော်", english: "Insomnia" },
    "လက်နှင့်ခြေထောက်ထုံ": { my: "လက်နှင့်ခြေထောက်ထုံ", english: "Numbness in Limbs" },
    "မျက်လုံးမှုန်": { my: "မျက်လုံးမှုန်", english: "Blurred Vision" },
    "နားနာ": { my: "နားနာ", english: "Ear Pain" },
    "သွားနာ": { my: "သွားနာ", english: "Toothache" },

    // Nepali Symptoms (30)
    "टाउको दुखाइ": { ne: "टाउको दुखाइ", english: "Headache" },
    "छाती दुखाइ": { ne: "छाती दुखाइ", english: "Chest Pain" },
    "खोकी": { ne: "खोकी", english: "Cough" },
    "सास फेर्न गाह्रो": { ne: "सास फेर्न गाह्रो", english: "Shortness of Breath" },
    "ज्वरो": { ne: "ज्वरो", english: "Fever" },
    "वान्ता": { ne: "वान्ता", english: "Vomiting" },
    "पखाला": { ne: "पखाला", english: "Diarrhea" },
    "पेट दुखाइ": { ne: "पेट दुखाइ", english: "Abdominal Pain" },
    "थकान": { ne: "थकान", english: "Fatigue" },
    "पसिना": { ne: "पसिना", english: "Sweating" },
    "खुजली": { ne: "खुजली", english: "Itching" },
    "आँखा रातो": { ne: "आँखा रातो", english: "Red Eyes" },
    "घाँटी दुखाइ": { ne: "घाँटी दुखाइ", english: "Sore Throat" },
    "नाक बगाउनु": { ne: "नाक बगाउनु", english: "Runny Nose" },
    "चक्कर आउनु": { ne: "चक्कर आउनु", english: "Dizziness" },
    "हात र खुट्टा सुन्निनु": { ne: "हात र खुट्टा सुन्निनु", english: "Numbness in Limbs" },
    "पिसाब गर्दा जलन": { ne: "पिसाब गर्दा जलन", english: "Burning Urination" },
    "कब्जियत": { ne: "कब्जियत", english: "Constipation" },
    "अपच": { ne: "अपच", english: "Indigestion" },
    "ढाड दुखाइ": { ne: "ढाड दुखाइ", english: "Back Pain" },
    "जोर्नी दुखाइ": { ne: "जोर्नी दुखाइ", english: "Joint Pain" },
    "राती पसिना": { ne: "राती पसिना", english: "Night Sweats" },
    "तौल घट्नु": { ne: "तौल घट्नु", english: "Weight Loss" },
    "तौल बढ्नु": { ne: "तौल बढ्नु", english: "Weight Gain" },
    "डिप्रेसन": { ne: "डिप्रेसन", english: "Depression" },
    "निद्रा नआउनु": { ne: "निद्रा नआउनु", english: "Insomnia" },
    "हात र खुट्टा सुन्निनु": { ne: "हात र खुट्टा सुन्निनु", english: "Numbness in Limbs" },
    "आँखा धुंधलाउनु": { ne: "आँखा धुंधलाउनु", english: "Blurred Vision" },
    "कान दुखाइ": { ne: "कान दुखाइ", english: "Ear Pain" },
    "दाँत दुखाइ": { ne: "दाँत दुखाइ", english: "Toothache" },
    "घाँटी बसेको": { ne: "घाँटी बसेको", english: "Hoarse Voice" }, <!-- Added symptom -->
    "नाक बन्द": { ne: "नाक बन्द", english: "Nasal Congestion" } <!-- Added symptom -->
};

// Initialize symptoms
function initSymptoms() {
    const symptomsGrid = document.getElementById('symptomsGrid');
    symptomsGrid.innerHTML = '';
    const patientLanguage = document.getElementById('patientLanguage').value;

    Object.keys(medicalTerms).forEach(term => {
        if (medicalTerms[term][patientLanguage]) {
            const button = document.createElement('button');
            button.className = 'symptom-btn';
            button.textContent = medicalTerms[term][patientLanguage];
            button.setAttribute('aria-label', `Translate ${medicalTerms[term][patientLanguage]}`);
            button.addEventListener('click', () => translateTerm(medicalTerms[term][patientLanguage], medicalTerms[term].english));
            symptomsGrid.appendChild(button);
        }
    });
}

// Translate term and speak in English
function translateTerm(term, englishTranslation) {
    const resultDiv = document.getElementById('translationResult');
    resultDiv.innerHTML = `
        <div class="translation-block">
            <strong>Patient's Term:</strong> ${term}
            <button class="speak-btn" onclick="speak('${englishTranslation}', 'en')">🔊</button>
        </div>
        <div class="translation-block">
            <strong>English:</strong> ${englishTranslation}
        </div>
    `;
    speak(englishTranslation, 'en');
}

// Speech synthesis
function speak(text, language, rate = 0.8) {
    if (!window.speechSynthesis) {
        showNotification('Speech synthesis not supported in this browser', 'error');
        return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'en' ? 'en-US' : 'ms-MY';
    utterance.rate = rate;
    window.speechSynthesis.speak(utterance);
}

// Notification system
function showNotification(message, type) {
    const notificationArea = document.getElementById('notificationArea');
    notificationArea.textContent = message;
    notificationArea.className = type;
    notificationArea.style.display = 'block';
    setTimeout(() => {
        notificationArea.style.display = 'none';
    }, 5000);
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('patientLanguage').addEventListener('change', initSymptoms);
    initSymptoms();
});