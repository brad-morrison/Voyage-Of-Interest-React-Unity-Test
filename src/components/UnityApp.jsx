import React, { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function UnityApp() {
  const { unityProvider, isLoaded, loadingProgression, sendMessage } =
    useUnityContext({
      loaderUrl: "/Build/final-test-gzip.loader.js",
      dataUrl: "/Build/final-test-gzip.data.gz",
      frameworkUrl: "/Build/final-test-gzip.framework.js.gz",
      codeUrl: "/Build/final-test-gzip.wasm.gz",
    });

  const [unityData, setUnityData] = useState(null);

  window.receiveDataFromUnity = (json) => {
    console.log("Data received from Unity!!");
    console.log(json);
    setUnityData(JSON.parse(json));
  };

  window.playerSkippedUnityGame = () => {
    console.log("Player skipped the Unity game!!");
  };

  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "20px" }}>
      <Unity
        style={{ width: "400px", height: "800px" }}
        className="unity"
        unityProvider={unityProvider}
      />
      {unityData && (
        <div style={{ flex: 1 }}>
          <h3 style={{ color: "blue" }}>Total Score: {unityData.totalScore}</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {unityData.choices.map((choice, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "10px",
                  border: "1px solid #ccc",
                  padding: "10px",
                  borderRadius: "5px",
                }}
              >
                <p>Did Bank: {choice.didBank ? "Yes" : "No"}</p>
                <p>Banked: {choice.banked}</p>
                <p>Score: {choice.score}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UnityApp;
