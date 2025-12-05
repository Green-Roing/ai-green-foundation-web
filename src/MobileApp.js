import React, { useState } from "react";

const MobileApp = () => {
  const [showIOSModal, setShowIOSModal] = useState(false);
  const [testFlightLoading, setTestFlightLoading] = useState(false);
  const [appLoading, setAppLoading] = useState(false);

  return (
    <section
      style={{
        padding: "80px 20px",
        background: "linear-gradient(135deg, #27ae60 0%, #2ecc71 100%)",
        color: "white",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h2
          style={{
            fontSize: "1.8rem",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Download Green Roing App
        </h2>

        <p
          style={{
            fontSize: "1rem",
            marginBottom: "50px",
            opacity: "0.9",
            maxWidth: "600px",
            margin: "0 auto 50px",
          }}
        >
          Join millions of users making a positive environmental impact. Track
          your green activities, and contribute to a sustainable
          future.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "center",
            gap: "40px",
            marginBottom: "50px",
          }}
        >
          {/* App Video Demo */}
          <div
            style={{
              flex: "1",
              minWidth: "300px",
              maxWidth: "400px",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.1)",
                borderRadius: "20px",
                padding: "20px",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <video
                controls
                poster={`${process.env.PUBLIC_URL}/app-poster.png`}
                style={{
                  width: "100%",
                  maxWidth: "250px",
                  height: "auto",
                  borderRadius: "15px",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
              >
                <source
                  src="https://github.com/GreenRoing/gr-app/releases/download/video/androidVideo.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div
            style={{
              flex: "1",
              minWidth: "300px",
            }}
          >
            {/* App Features */}
            <div
              style={{
                flex: "1",
                minWidth: "300px",
                textAlign: "left",
              }}
            >
              <div style={{ marginBottom: "30px" }}>
                <h3 style={{ fontSize: "1.1rem", marginBottom: "15px" }}>
                  <i
                    className="fas fa-check-circle"
                    style={{ color: "white", marginRight: "10px" }}
                  ></i>
                  Add Your Scrap Items
                </h3>
              </div>

              <div style={{ marginBottom: "30px" }}>
                <h3 style={{ fontSize: "1.1rem", marginBottom: "15px" }}>
                  <i
                    className="fas fa-check-circle"
                    style={{ color: "white", marginRight: "10px" }}
                  ></i>
                  Schedule Pickups At Your Door Step
                </h3>
              </div>

              <div>
                <h3 style={{ fontSize: "1.1rem", marginBottom: "15px" }}>
                  <i
                    className="fas fa-check-circle"
                    style={{ color: "white", marginRight: "10px" }}
                  ></i>
                  Earn Cash For Your Scrap
                </h3>
              </div>
            </div>
            {/* Download Buttons */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                justifyContent:
                  window.innerWidth > 768 ? "flex-start" : "center",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.greenroing&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: "#000",
                  color: "white",
                  padding: "15px 25px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  transition: "transform 0.3s ease",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.transform = "translateY(-3px)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.transform = "translateY(0)")
                }
              >
                <i
                  className="fab fa-google-play"
                  style={{ fontSize: "2rem", marginRight: "15px" }}
                ></i>
                <div>
                  <div style={{ fontSize: "0.8rem", opacity: "0.8" }}>
                    Get it on
                  </div>
                  <div>Google Play</div>
                </div>
              </a>

              <button
                onClick={() => setShowIOSModal(true)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  background: "#000",
                  color: "white",
                  padding: "15px 25px",
                  borderRadius: "12px",
                  border: "none",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  transition: "transform 0.3s ease",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.transform = "translateY(-3px)")
                }
                onMouseLeave={(e) =>
                  (e.target.style.transform = "translateY(0)")
                }
              >
                <i
                  className="fab fa-apple"
                  style={{ fontSize: "2rem", marginRight: "15px" }}
                ></i>
                <div>
                  <div style={{ fontSize: "0.8rem", opacity: "0.8" }}>
                    Download on the
                  </div>
                  <div>App Store</div>
                </div>
              </button>
            </div>
            {/* Stats */}
            <div
              style={{
                display: "flex",
                justifyContent:
                  window.innerWidth > 768 ? "flex-start" : "center",
                gap: "50px",
                marginTop: "60px",
                flexWrap: "wrap",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  1.5K+
                </div>
                <div style={{ opacity: "0.8" }}>Downloads</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  4.8★
                </div>
                <div style={{ opacity: "0.8" }}>Rating</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "white",
                  }}
                >
                  1K+
                </div>
                <div style={{ opacity: "0.8" }}>Active Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showIOSModal && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 50,
            padding: "16px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              maxWidth: "400px",
              width: "100%",
              position: "relative",
            }}
          >
            <button
              onClick={() => setShowIOSModal(false)}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "none",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                color: "#666",
              }}
            >
              ×
            </button>

            <div style={{ padding: "24px" }}>
              <h2
                style={{
                  textAlign: "center",
                  fontSize: "1.1rem",
                  fontWeight: "bold",
                  color: "#111",
                  marginBottom: "24px",
                }}
              >
                Download Green Roing for iOS
              </h2>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    padding: "16px",
                    backgroundColor: "#dbeafe",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: "#3b82f6",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      flexShrink: 0,
                    }}
                  >
                    1
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontWeight: "600",
                        color: "#111",
                        marginBottom: "8px",
                        fontSize: "1rem",
                      }}
                    >
                      Download TestFlight
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "#666",
                        marginBottom: "12px",
                      }}
                    >
                      First, install TestFlight from the App Store
                    </p>
                    <button
                      onClick={() => {
                        setTestFlightLoading(true);
                        setTimeout(() => {
                          window.open(
                            "https://apps.apple.com/in/app/testflight/id899247664",
                            "_blank"
                          );
                          setTestFlightLoading(false);
                        }, 800);
                      }}
                      disabled={testFlightLoading}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "8px 16px",
                        border: "2px solid #3b82f6",
                        color: "#3b82f6",
                        borderRadius: "8px",
                        background: "white",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        opacity: testFlightLoading ? 0.5 : 1,
                      }}
                    >
                      {testFlightLoading ? "Opening..." : "Get TestFlight"}
                    </button>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    padding: "16px",
                    backgroundColor: "#dcfce7",
                    borderRadius: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      backgroundColor: "#22c55e",
                      color: "white",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontWeight: "bold",
                      flexShrink: 0,
                    }}
                  >
                    2
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3
                      style={{
                        fontWeight: "600",
                        color: "#111",
                        marginBottom: "8px",
                        fontSize: "1rem",
                      }}
                    >
                      Install Green Roing
                    </h3>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "#666",
                        marginBottom: "12px",
                      }}
                    >
                      Then, use this link to install our app via TestFlight
                    </p>
                    <button
                      onClick={() => {
                        setAppLoading(true);
                        setTimeout(() => {
                          window.open(
                            "https://testflight.apple.com/join/gucdwdU8",
                            "_blank"
                          );
                          setAppLoading(false);
                        }, 800);
                      }}
                      disabled={appLoading}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        padding: "8px 16px",
                        border: "2px solid #22c55e",
                        color: "#22c55e",
                        borderRadius: "8px",
                        background: "white",
                        cursor: "pointer",
                        transition: "all 0.2s",
                        opacity: appLoading ? 0.5 : 1,
                      }}
                    >
                      {appLoading ? "Opening..." : "Install App"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MobileApp;
