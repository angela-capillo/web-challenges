import "./styles.css";

function HelloWorldArticle() {
  return (
    <article>
      <h1>Nap</h1>
      <p>
        A nap is a short period of sleep, typically taken during daytime hours
        as an adjunct to the usual nocturnal sleep period. Naps are most often
        taken as a response to drowsiness during waking hours or as a means to
        supplement before or after loss of sleep. A nap is a form of biphasic or
        polyphasic sleep, where the latter terms also include longer periods of
        sleep in addition to one period. There are multiple different types of
        naps depending on what the user&apos;s desired outcome may be or time
        constraints they may have, and for years, scientists have been
        investigating the benefits of napping, including the 30 minute nap as
        well as sleep durations of 1 - 2 hours. Performance across a wide range of
        cognitive processes has been tested, and naps have been shown to have
        various cognitive, physical, and psychosocial benefits.
      </p>
    </article>
  )
}

export default function App() {
  return <HelloWorldArticle />;
}
