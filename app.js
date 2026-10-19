(() => {
  "use strict";

  const thoughts = [
    { category: "PERSPECTIVE", text: "Your next chapter doesn't need permission from your last one.", note: "You can begin again without explaining why." },
    { category: "GROWTH", text: "Not all progress makes a sound.", note: "Quiet growth is still growth." },
    { category: "SELF-WORTH", text: "Wear confidence, not comparison.", note: "Your journey does not need anyone else's approval." },
    { category: "AUTHENTICITY", text: "Your vibe introduces you before you speak.", note: "Let your actions reflect who you are." },
    { category: "PATIENCE", text: "Slow days are still part of the journey.", note: "Rest when you need to. Keep believing." },
    { category: "COURAGE", text: "Be rare. Be real. Be relentlessly you.", note: "Authenticity never goes out of style." },
    { category: "LIFE", text: "Some chapters are written in silence.", note: "You don't have to explain every season of your life." },
    { category: "BECOMING", text: "Make peace with becoming.", note: "You are allowed to learn, change, and begin again." },
    { category: "DISCIPLINE", text: "Discipline is self-respect in action.", note: "Show up for the future you want." },
    { category: "FREEDOM", text: "Collect moments, not approval.", note: "Live a life that feels right to you." },
    { category: "WISDOM", text: "A calm mind can hear what noise hides.", note: "Make a little room for stillness." },
    { category: "CONFIDENCE", text: "You don't need to be everyone's cup of tea.", note: "Being yourself is a better fit than pretending." },
    { category: "RESILIENCE", text: "You have survived days you once thought impossible.", note: "Give yourself credit for making it here." },
    { category: "FOCUS", text: "Protect your attention like it builds your future.", note: "What you feed grows." },
    { category: "PERSPECTIVE", text: "A detour can still take you somewhere beautiful.", note: "Not every change of direction is a setback." },
    { category: "SELF-LOVE", text: "Talk to yourself like someone you are responsible for.", note: "Kindness belongs in your inner voice too." },
    { category: "COURAGE", text: "Start before the doubt gets comfortable.", note: "Clarity often arrives after the first step." },
    { category: "SIMPLICITY", text: "A simpler life can hold a richer heart.", note: "Not everything meaningful needs to be more." },
    { category: "TIME", text: "Give your dreams a calendar, not just a wish.", note: "Small consistent actions make room for big change." },
    { category: "BOUNDARIES", text: "A peaceful no is a complete sentence.", note: "You can be kind without abandoning yourself." },
    { category: "RELATIONSHIPS", text: "Choose people who make honesty feel safe.", note: "The right company leaves room for your real self." },
    { category: "HOPE", text: "Even a cloudy sky is still holding light.", note: "This moment is not the whole story." },
    { category: "CREATIVITY", text: "Make things before you feel ready to be seen.", note: "Your first version is allowed to be a beginning." },
    { category: "PATIENCE", text: "Roots grow long before branches show.", note: "Keep doing the work no one can see yet." },
    { category: "SELF-WORTH", text: "You are not a deadline someone else invented.", note: "Your pace is allowed to be human." },
    { category: "MINDSET", text: "Trade 'what if I fail?' for 'what if I learn?'", note: "Curiosity makes courage easier." },
    { category: "JOY", text: "Let ordinary days have a little magic.", note: "Notice the small things that make life feel alive." },
    { category: "AUTHENTICITY", text: "You were not made to be a perfect copy.", note: "Your differences are part of the design." },
    { category: "BALANCE", text: "You can be ambitious and still take a breath.", note: "Rest and progress are allowed to coexist." },
    { category: "WISDOM", text: "Not every open door deserves your energy.", note: "Choose what aligns, not only what is available." },
    { category: "COURAGE", text: "Let your fear ride along, not drive.", note: "Bravery is movement with the nerves still there." },
    { category: "GROWTH", text: "Outgrow the version of you that kept you safe.", note: "You can thank the past without living in it." },
    { category: "FOCUS", text: "Your next small step is more useful than a perfect plan.", note: "Begin with what is in reach." },
    { category: "SELF-RESPECT", text: "Keep promises to yourself in small ways.", note: "Trust is built one kept promise at a time." },
    { category: "LIFE", text: "Some answers arrive after you stop chasing them.", note: "Give life a little room to unfold." },
    { category: "HAPPINESS", text: "You are allowed to enjoy the life you're building.", note: "Don't postpone every good feeling until the finish line." },
    { category: "PERSPECTIVE", text: "A pause is not the same as giving up.", note: "Sometimes stopping is how you keep going." },
    { category: "KINDNESS", text: "Be gentle. Everyone is carrying an unseen draft.", note: "You rarely know the whole story." },
    { category: "AMBITION", text: "Build a life you don't need to escape from.", note: "Success should make room for being alive." },
    { category: "CONFIDENCE", text: "You can be a work in progress and still be proud.", note: "Growth doesn't cancel today's worth." },
    { category: "CHANGE", text: "You can miss the old days and still move forward.", note: "Gratitude and change can share the same heart." },
    { category: "PATIENCE", text: "Let the season teach you what the shortcut can't.", note: "Some lessons need time to take root." },
    { category: "CREATIVITY", text: "Your ideas deserve a chance outside your head.", note: "Make the rough draft. Let it exist." },
    { category: "INNER PEACE", text: "You don't have to attend every argument you're invited to.", note: "Protect the quiet you worked hard to find." },
    { category: "RESILIENCE", text: "A hard day is not a failed life.", note: "Zoom out before you judge the whole picture." },
    { category: "LOVE", text: "Make room for people who feel like exhaling.", note: "Comfort can be a kind of belonging." },
    { category: "DISCIPLINE", text: "Motivation visits. Habits make a home.", note: "Make the good choice easier to repeat." },
    { category: "WISDOM", text: "The loudest opinion isn't always the deepest truth.", note: "Listen for substance, not volume." },
    { category: "FREEDOM", text: "You can change your mind when you learn more.", note: "Consistency should not require ignoring growth." },
    { category: "HOPE", text: "Begin again, but bring the lesson with you.", note: "A fresh start can still be wiser." },
    { category: "SELF-LOVE", text: "You deserve the care you give away so easily.", note: "Save some of your tenderness for yourself." },
    { category: "FOCUS", text: "Comparison steals the view from your own path.", note: "Look at how far you have come." },
    { category: "COURAGE", text: "Do it scared, then let experience speak.", note: "Confidence can be built after you begin." },
    { category: "LIFE", text: "Life is happening between the milestones.", note: "Don't miss the ordinary magic on the way." },
    { category: "AUTHENTICITY", text: "Your real self is not a rebrand.", note: "You don't need to perform to be worthy." },
    { category: "BOUNDARIES", text: "Access to you is not owed to everyone.", note: "Care can have clear edges." },
    { category: "GROWTH", text: "Become curious about the things that challenge you.", note: "Discomfort can point toward a new skill." },
    { category: "JOY", text: "Celebrate the tiny wins; they did the heavy lifting.", note: "Big changes are often built from small moments." },
    { category: "PERSPECTIVE", text: "You can be grateful and still want more.", note: "Contentment and ambition can live together." },
    { category: "TIME", text: "Spend your days like they matter, because they do.", note: "Give your attention to what you want to remember." },
    { category: "SELF-RESPECT", text: "Stop shrinking to fit places you have outgrown.", note: "You are allowed to take up honest space." },
    { category: "MINDSET", text: "Replace the verdict with a question.", note: "Ask what this moment can teach you." },
    { category: "RELATIONSHIPS", text: "Consistency is a quiet kind of affection.", note: "Care shows up in the little things, repeatedly." },
    { category: "PATIENCE", text: "You don't need the whole staircase to take one step.", note: "Start with the next reachable thing." },
    { category: "CREATIVITY", text: "Make your taste a compass, not a cage.", note: "Let inspiration guide you without limiting you." },
    { category: "WISDOM", text: "Sometimes peace is the answer you were seeking.", note: "You do not need to win every point." },
    { category: "COURAGE", text: "Let yourself be new at something.", note: "Beginnings are proof that you are still expanding." },
    { category: "HOPE", text: "A small light still changes a dark room.", note: "Never underestimate a little good." },
    { category: "BALANCE", text: "You are a person, not a productivity report.", note: "Your value is not measured by output." },
    { category: "GROWTH", text: "Learn the lesson without becoming the wound.", note: "Your past can inform you without defining you." },
    { category: "FOCUS", text: "Make space for what you say matters.", note: "Your calendar often reveals your real priorities." },
    { category: "AUTHENTICITY", text: "Be honest enough to be understood by the right people.", note: "The right connection doesn't require a mask." },
    { category: "LIFE", text: "Some things bloom only after you let go.", note: "Release can be part of making room." },
    { category: "SELF-WORTH", text: "You don't have to earn the right to rest.", note: "Rest is a human need, not a trophy." },
    { category: "DISCIPLINE", text: "Make tomorrow easier with one choice today.", note: "Future-you is built in ordinary moments." },
    { category: "KINDNESS", text: "Leave people a little lighter than you found them.", note: "Small kindness travels further than you see." },
    { category: "PERSPECTIVE", text: "A closed door can redirect your whole horizon.", note: "Disappointment can make space for a better fit." },
    { category: "CONFIDENCE", text: "You can be soft and still be strong.", note: "Gentleness is not the absence of courage." },
    { category: "CHANGE", text: "The person you are becoming needs your participation.", note: "Choose one action that matches the future you imagine." },
    { category: "JOY", text: "Let yourself like what you like without a defence.", note: "Small pleasures don't need a committee." },
    { category: "INNER PEACE", text: "Not everything deserves a reaction.", note: "Your response is a place where you have choice." },
    { category: "AMBITION", text: "Dream boldly. Build quietly. Repeat.", note: "Let steady effort make the announcement." },
    { category: "PATIENCE", text: "A slow yes is better than a rushed maybe.", note: "Give meaningful choices the time they deserve." },
    { category: "SELF-LOVE", text: "You can forgive yourself and still do better.", note: "Accountability and compassion belong together." },
    { category: "WISDOM", text: "Choose the truth that helps you grow, not the lie that keeps you comfy.", note: "Honesty can be kind and still be direct." },
    { category: "COURAGE", text: "Your comfort zone has good walls and a low ceiling.", note: "Explore beyond what is familiar, one step at a time." },
    { category: "RELATIONSHIPS", text: "Be where your presence is welcomed, not merely tolerated.", note: "Belonging should not feel like a constant audition." },
    { category: "GROWTH", text: "Every expert once had a first awkward attempt.", note: "Let practice be part of your pride." },
    { category: "TIME", text: "You can start late and still arrive somewhere wonderful.", note: "Your timeline is not a competition." },
    { category: "MINDSET", text: "A setback is information, not your identity.", note: "Use what happened without becoming it." },
    { category: "SIMPLICITY", text: "Keep what gives your life meaning; question the rest.", note: "Less noise can make the important things clearer." },
    { category: "HOPE", text: "The future is not required to resemble your hardest day.", note: "Leave room for better chapters." },
    { category: "AUTHENTICITY", text: "Your life gets lighter when the performance ends.", note: "You deserve spaces where you can simply be." },
    { category: "FOCUS", text: "Attention is a form of love. Spend it wisely.", note: "Notice who and what gets the best of you." },
    { category: "RESILIENCE", text: "You are allowed to rebuild with better materials.", note: "Survival taught you something; now choose what serves you." },
    { category: "BALANCE", text: "A full life is not always a busy one.", note: "Make room for the things that don't look productive." },
    { category: "COURAGE", text: "Let your actions introduce the person you hope to become.", note: "Identity grows through what you practise." },
    { category: "LIFE", text: "You don't need a perfect day to have a meaningful one.", note: "Look for one thing worth keeping." },
    { category: "SELF-RESPECT", text: "Don't negotiate away the values that keep you grounded.", note: "Flexibility is useful; losing yourself is expensive." },
    { category: "JOY", text: "There is no prize for making everything harder.", note: "Choose ease when ease is available." },
    { category: "PERSPECTIVE", text: "You are seeing the world through today's weather.", note: "Let a feeling pass before you call it forever." },
    { category: "BECOMING", text: "You are both the artist and the unfinished work.", note: "Keep making room for your next version." }
  ];

  const $ = (id) => document.getElementById(id);
  const card = $("thoughtCard");
  const textEl = $("thoughtText");
  const noteEl = $("thoughtNote");
  const categoryEl = $("thoughtCategory");
  const numberEl = $("thoughtNumber");
  const statusEl = $("statusMessage");
  let lastIndex = -1;
  let currentThought = thoughts[0];

  const config = window.CLOVER_THOUGHTS_CONFIG || {};
  const storeUrl = config.STORE_URL || "https://thecloverprint.in/";
  ["storeLinkTop", "storeLinkBottom"].forEach((id) => {
    const link = $(id);
    if (link) link.href = storeUrl;
  });
  $("year").textContent = new Date().getFullYear();

  function randomIndex() {
    if (thoughts.length < 2) return 0;
    let index;
    do {
      index = Math.floor(Math.random() * thoughts.length);
    } while (index === lastIndex);
    return index;
  }

  function showThought() {
    const index = randomIndex();
    lastIndex = index;
    currentThought = thoughts[index];

    card.classList.remove("is-changing");
    // Restart the brief entrance animation for each new quote.
    void card.offsetWidth;
    card.classList.add("is-changing");

    textEl.textContent = "“" + currentThought.text + "”";
    noteEl.textContent = currentThought.note;
    categoryEl.textContent = currentThought.category;
    numberEl.textContent = "THOUGHT " + String(index + 1).padStart(3, "0");
    statusEl.textContent = "";
  }

  function thoughtForSharing() {
    return "“" + currentThought.text + "”\n" + currentThought.note +
      "\n— The Clover Print\n" + window.location.href;
  }

  $("anotherButton").addEventListener("click", showThought);

  $("copyButton").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(thoughtForSharing());
      statusEl.textContent = "Thought copied — pass it on.";
    } catch {
      statusEl.textContent = "Copy isn't available in this browser. You can select the thought text to copy it.";
    }
  });

  $("shareButton").addEventListener("click", async () => {
    const shareData = {
      title: "A thought for you — The Clover Print",
      text: "“" + currentThought.text + "” " + currentThought.note,
      url: window.location.href
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(thoughtForSharing());
        statusEl.textContent = "Share text copied — send it to someone.";
      }
    } catch (error) {
      if (error && error.name !== "AbortError") {
        statusEl.textContent = "Sharing isn't available here. Try copying the thought instead.";
      }
    }
  });

  showThought();
})();
