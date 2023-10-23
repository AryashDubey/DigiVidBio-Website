const { RichText } = require("@graphcms/rich-text-react-renderer");

export function CustomRichTextContentRenderer(props) {
  return (
    <RichText
      renderers={{
        h1: ({ children }) => (
          <h1
            style={{
              margin: "64px 0px",
              color: "rgb(var(--rgbText))",
            }}
          >
            {children}
          </h1>
        ),
        h2: ({ children }) => (
          <h2
            style={{
              margin: "32px 0px",
              color: "rgb(var(--rgbText))",
            }}
          >
            {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3
            style={{
              margin: "32px 0px",
              color: "rgb(var(--rgbText))",
            }}
          >
            {children}
          </h3>
        ),
        h4: ({ children }) => (
          <h4
            style={{
              margin: "32px 0px",
              color: "rgb(var(--rgbText))",
            }}
          >
            {children}
          </h4>
        ),
        a: ({ href, children }) => (
          <a
            href={href}
            style={{
              color: "var($primary)",
            }}
          >
            {children}
          </a>
        ),
        bold: ({ children }) => (
          <strong
            style={{
              margin: "16px 0px",
              color: "rgb(var(--rgbText))",
            }}
          >
            {children}
          </strong>
        ),
        p: ({ children }) => (
          <p
            style={{
              margin: "16px 0px",
              fontSize: "18px",
              lineHeight: "32px",
              textDecorationColor: "red",
            }}
          >
            {children}
          </p>
        ),
        li: ({ children }) => (
          <li
            style={{
              margin: "16px 8px",
              fontSize: "18px",
              lineHeight: "32px",
            }}
          >
            {children}
          </li>
        ),
        
        table: ({ children }) => (
          <div
            style={{
              display: "block",
              overflowX: "auto",
              width: "100%",
            }}
          >
            <table>{children}</table>
          </div>
        ),
        img: ({ src }) => (
          <div
            style={{
              alignItems: "center",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              src={src}
              style={{
                borderRadius: "8px",
                alignItems: "center",
                maxHeight: "750px",
                maxWidth: "750px",
                margin: "64px 0px",
                width: "100%",
              }}
              alt={props.title}
            />
          </div>
        ),
      }}
      content={props.raw}
    />
  );
}
