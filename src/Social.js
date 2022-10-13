export function Social (props) {
  return(
    <div class="social">
      {props.social.map((item) => (
        <a
          class={`button button-${item.class}`}
          href={item.url}
          title={item.name}
          >
          <img className="icon" src={item.icon} alt={item.name} />
          {item.name}
        </a>
      ))}
    </div>
  )
}