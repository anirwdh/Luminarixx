import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
  padding: 8rem 5%;
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 4rem 5%;
  }
`;


const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 5rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  .badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: ${({ theme }) => theme.colors.surface};
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    font-size: ${({ theme }) => theme.typography.small};
    color: ${({ theme }) => theme.colors.text.secondary};
    margin-bottom: 2rem;
  }
  
  h2 {
    font-size: ${({ theme }) => theme.typography.h1};
    font-weight: 500;
    letter-spacing: -0.04em;
    margin-bottom: 1.5rem;
    line-height: 1.1;
  }
  
  p {
    font-size: ${({ theme }) => theme.typography.h3};
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 1rem;
  }
`;


// --- Animations ---
const floatSlow = keyframes`0% { transform: translateY(0); } 100% { transform: translateY(-8px); }`;
const floatFast = keyframes`0% { transform: translateY(0); } 100% { transform: translateY(-12px); }`;
const spin = keyframes`to { transform: rotate(360deg); }`;
const spinReverse = keyframes`to { transform: rotate(-360deg); }`;
const pulseCore = keyframes`0% { transform: translate(-50%, -50%) scale(0.8); opacity: 0.3; } 50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; } 100% { transform: translate(-50%, -50%) scale(0.8); opacity: 0; }`;
const scrollInfinite = keyframes`0% { transform: translateY(0); } 100% { transform: translateY(-60%); }`;
const popItem = keyframes`0% { transform: scale(1); } 50% { transform: scale(1.02); } 100% { transform: scale(1); }`;

// --- Visual Components Setup (Max Fidelity) ---

// 1. QUICK DELIVERY
// 1. CAROUSEL MARQUEE (QUICK DELIVERY)
const marqueeScroll = keyframes`
  0% { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
`;

const V1Container = styled.div`
  height: 280px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1.5rem;
  margin-bottom: 1.5rem;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 220px;
  }

  /* Ambient Blur Glow Mesh */
  &::before {
    content: '';
    position: absolute;
    width: 250px; height: 250px;
    background: radial-gradient(circle at center, rgba(100,100,200,0.1) 0%, transparent 70%);
    top: 50%; left: 30%;
    transform: translate(-50%, -50%);
  }



  /* MARQUEE STYLES (Positioned absolute so it doesn't break parent flexbox layout) */
  .marquee-wrapper {
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
    z-index: 3;
    pointer-events: none;
  }

  .fade-edges {
    position: absolute; inset: 0; pointer-events: none; z-index: 4;
    background: linear-gradient(to right, ${({ theme }) => theme.colors.background} 0%, transparent 15%, transparent 85%, ${({ theme }) => theme.colors.background} 100%);
  }

  .marquee-track {
    display: flex;
    gap: 1.5rem;
    width: max-content;
    will-change: transform;
    pointer-events: auto;
    /* Important for perfectly seamless infinite looping! Adds the flex gap to the end */
    padding-right: 1.5rem; 
  }

  .track-left {
    animation: ${marqueeScroll} 14s linear infinite;
  }

  .track-right {
    animation: ${marqueeScroll} 16s linear infinite reverse;
  }

  .floating-glass {
    background: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.6);
    padding: 0.75rem 1rem;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    box-shadow: 0 10px 30px -5px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,1);
    transition: transform 0.2s ease;
    
    &:hover {
      transform: scale(1.05);
    }
    
    .avatar { 
      width: 32px; height: 32px; 
      border-radius: 50%; 
      display: flex; align-items:center; justify-content:center; 
      color: #fff; font-weight:600; font-size:1.2rem;
      box-shadow: inset 0 -2px 5px rgba(0,0,0,0.2);
    }
    .text-stack { display: flex; flex-direction: column; gap: 4px; }
    .text-top { font-size: 0.8rem; font-weight: 600; color: #111; white-space: nowrap; }
    .text-bot { font-size: 0.65rem; color: #777; white-space: nowrap; }
  }
`;

const Visual1 = () => {
  const row1 = [
    { av: '🚀', textLine1: '+40 Clients', textLine2: 'Onboarded', bg: 'linear-gradient(135deg, #FF6B6B, #C0392B)' },
    { av: '💬', textLine1: 'Messages', textLine2: 'Sent today', bg: 'linear-gradient(135deg, #1DD1A1, #10AC84)' },
    { av: '✅', textLine1: 'Completed orders', textLine2: 'Delivered', bg: 'linear-gradient(135deg, #54A0FF, #2E86DE)' },
    { av: '⚡', textLine1: 'Fast Delivery', textLine2: 'Within 24h', bg: 'linear-gradient(135deg, #FDCB6E, #E17055)' },
  ];
  
  const row2 = [
    { av: '📈', textLine1: 'Analytics', textLine2: 'Checked', bg: 'linear-gradient(135deg, #9B59B6, #8E44AD)' },
    { av: '🗣️', textLine1: 'Support', textLine2: '24/7 Available', bg: 'linear-gradient(135deg, #FF9F43, #EE5A24)' },
    { av: '🔥', textLine1: 'Optimization', textLine2: 'Completed', bg: 'linear-gradient(135deg, #10AC84, #01A3A4)' },
    { av: '🛠️', textLine1: 'Maintenance', textLine2: 'Ongoing', bg: 'linear-gradient(135deg, #FF6B6B, #C0392B)' },
  ];

  const renderTrack = (items) => {
    // Duplicate exactly once for seamless infinite scrolling
    const duplicated = [...items, ...items];
    return duplicated.map((item, i) => (
      <div className="floating-glass" key={i}>
        <div className="avatar" style={{ background: item.bg }}>{item.av}</div>
        <div className="text-stack">
          <div className="text-top">{item.textLine1}</div>
          <div className="text-bot">{item.textLine2}</div>
        </div>
      </div>
    ));
  };

  return (
    <V1Container>
      {/* Absolute positioned marquee layer */}
      <div className="marquee-wrapper">
        <div className="marquee-track track-left">
          {renderTrack(row1)}
        </div>
        <div className="marquee-track track-right">
          {renderTrack(row2)}
        </div>
      </div>
      
      {/* Fade edges */}
      <div className="fade-edges" />
    </V1Container>
  );
};

// 2. CUSTOM-MADE DESIGN (Perfectly Synced Fast Animation)
const V2Container = styled.div`
  height: 280px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1.5rem;
  margin-bottom: 1.5rem;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 220px;

    .node-label {
      display: none;
    }

    .static-orbit, .spokes, .orbit-arc {
      width: 140px;
      height: 140px;
    }

    .n0 { top: calc(50% - 70px); }
    .n1 { top: calc(50% - 35px); left: calc(50% + 60px); }
    .n2 { top: calc(50% + 35px); left: calc(50% + 60px); }
    .n3 { top: calc(50% + 70px); }
    .n4 { top: calc(50% + 35px); left: calc(50% - 60px); }
    .n5 { top: calc(50% - 35px); left: calc(50% - 60px); }
  }

  .static-orbit {
    position: absolute;
    width: 180px; height: 180px;
    border-radius: 50%;
    border: 6px solid #ffffff;
    box-shadow: 0 4px 15px rgba(0,0,0,0.03), inset 0 2px 10px rgba(0,0,0,0.02);
  }

  .spokes {
    position: absolute;
    width: 180px; height: 180px;
    z-index: 1;
  }
  .spoke {
    position: absolute;
    top: 0; left: calc(50% - 2px);
    width: 4px; height: 100%;
    background: linear-gradient(to bottom, #fff 0%, #fff 35%, transparent 40%, transparent 60%, #fff 65%, #fff 100%);
  }
  .s1 { transform: rotate(0deg); }
  .s2 { transform: rotate(60deg); }
  .s3 { transform: rotate(120deg); }

  .orbit-arc {
    position: absolute;
    width: 180px; height: 180px;
    border-radius: 50%;
    background: conic-gradient(from 0deg, transparent 0%, transparent 60%, rgba(0,0,0,0.1) 80%, rgba(17,17,17,1) 100%);
    -webkit-mask: radial-gradient(transparent 87px, #000 88px);
    mask: radial-gradient(transparent 87px, #000 88px);
    animation: ${spin} 3s linear infinite;
    z-index: 2;
  }

  /* Node items placed precisely on the 90px radius */
  .node-item {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translate(-50%, -50%);
    z-index: 6;
  }
  
  .icon-box {
    width: 32px; height: 32px;
    background: #f8f8f8;
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 8px;
    display: flex; align-items:center; justify-content:center;
    font-size: 14px; color: #999;
    position: relative;
    z-index: 3;
    animation: highlightNode 3s linear infinite;
  }
  
  .node-label {
    position: absolute;
    background: #f0f0f0;
    padding: 3px 10px;
    border-radius: 12px;
    font-size: 0.65rem;
    font-weight: 500;
    color: #666;
    white-space: nowrap;
    border: 1px solid rgba(0,0,0,0.05);
    animation: highlightLabel 3s linear infinite;
    z-index: 2;
    box-shadow: 0 4px 6px rgba(0,0,0,0.02);
  }

  .n0 { top: calc(50% - 90px); left: 50%; }
  .n0 .node-label { bottom: 100%; margin-bottom: 6px; }

  .n1 { top: calc(50% - 45px); left: calc(50% + 78px); }
  .n1 .node-label { left: 100%; margin-left: 6px; }

  .n2 { top: calc(50% + 45px); left: calc(50% + 78px); }
  .n2 .node-label { left: 100%; margin-left: 6px; }

  .n3 { top: calc(50% + 90px); left: 50%; }
  .n3 .node-label { top: 100%; margin-top: 6px; }

  .n4 { top: calc(50% + 45px); left: calc(50% - 78px); }
  .n4 .node-label { right: 100%; margin-right: 6px; }

  .n5 { top: calc(50% - 45px); left: calc(50% - 78px); }
  .n5 .node-label { right: 100%; margin-right: 6px; }

  /* Delay syncs with 3s rotation: 0s, 0.5s, 1.0s, 1.5s, 2.0s, 2.5s */
  .n0 .icon-box, .n0 .node-label { animation-delay: 0s; }
  .n1 .icon-box, .n1 .node-label { animation-delay: 0.5s; }
  .n2 .icon-box, .n2 .node-label { animation-delay: 1s; }
  .n3 .icon-box, .n3 .node-label { animation-delay: 1.5s; }
  .n4 .icon-box, .n4 .node-label { animation-delay: 2s; }
  .n5 .icon-box, .n5 .node-label { animation-delay: 2.5s; }

  @keyframes highlightNode {
    0%, 100% { border-color: #111; border-width: 2px; color: #111; box-shadow: 0 0 25px rgba(0,0,0,0.2); transform: scale(1.15); background: #fff;}
    12%, 88% { border-color: rgba(0,0,0,0.05); border-width: 1px; color: #999; background: #f8f8f8; transform: scale(1); box-shadow: none;}
  }
  @keyframes highlightLabel {
    0%, 100% { background: #111; color: #fff; border-color: #111; }
    12%, 88% { background: #f0f0f0; color: #666; border-color: rgba(0,0,0,0.05); }
  }
`;

const Visual2 = () => (
  <V2Container>
    <div className="spokes">
      <div className="spoke s1" />
      <div className="spoke s2" />
      <div className="spoke s3" />
    </div>
    <div className="static-orbit" />
    <div className="orbit-arc" />

    <div className="node-item n0"><div className="icon-box">✦</div><div className="node-label">Visual design</div></div>
    <div className="node-item n1"><div className="icon-box">🔲</div><div className="node-label">Wireframing</div></div>
    <div className="node-item n2"><div className="icon-box">🎯</div><div className="node-label">UX Strategy</div></div>
    <div className="node-item n3"><div className="icon-box">📊</div><div className="node-label">Analytics & Strategy</div></div>
    <div className="node-item n4"><div className="icon-box">💡</div><div className="node-label">Concepting</div></div>
    <div className="node-item n5"><div className="icon-box">🏗️</div><div className="node-label">Structure</div></div>
  </V2Container>
);

// 3. BUILT TO SCALE
const V3Container = styled.div`
  height: 280px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1.5rem;
  margin-bottom: 1.5rem;
  overflow: hidden;

  mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 220px;

    .device-frame {
      width: 200px;
      height: 340px;
    }
  }

  .device-frame {
    width: 250px;
    height: 400px;
    border: 8px solid #111;
    border-radius: 2.5rem;
    background: #f8f9fa;
    position: relative;
    overflow: hidden;
    padding: 2rem 0.5rem 0;
    box-shadow: 0 30px 60px rgba(0,0,0,0.1);

    &::before {
      content: '';
      position: absolute;
      top: 0; left: 50%;
      transform: translateX(-50%);
      width: 40%; height: 20px;
      background: #111;
      border-bottom-left-radius: 12px;
      border-bottom-right-radius: 12px;
      z-index: 10;
    }
  }

  .feed-track {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 0 0.5rem;
    animation: ${scrollInfinite} 8s linear infinite;
  }

  .card-item {
    background: #fff;
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 1rem;
    padding: 1rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.02);
    display: flex;
    flex-direction: column;
    gap: 6px;
    animation: ${popItem} 1.5s infinite;
  }

  .card-item:nth-child(even) { animation-delay: -0.7s; }

  .headerline { display: flex; justify-content: space-between; align-items: center; }
  .timestamp { font-size: 0.6rem; color: #aaa; text-transform: uppercase; letter-spacing: 1px; font-weight: 600; }
  .badge-tag { background: #E8F5E9; color: #2E7D32; font-size: 0.6rem; font-weight: 700; padding: 2px 6px; border-radius: 4px; }
  
  .title-area { display: flex; align-items: center; gap: 8px; margin-top: 2px; }
  .sq-icon { width: 24px; height: 24px; background: #F3F4F6; border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 0.8rem;}
  .main-txt { font-size: 0.85rem; font-weight: 600; color: #111; }
  
  .shadow-belt {
    position: absolute;
    top: 50%; left: -10px; width: 120%; height: 70px;
    background: rgba(0,0,0,0.2);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    transform: translateY(-50%);
    z-index: 5;
  }
`;

const Visual3 = () => {
  const feed = [
    { time: '12h ago', tag: 'DONE', title: 'Analytics updated', ic: '📈' },
    { time: '5h ago', tag: 'SYNC', title: 'Database mirrored', ic: '🗄️' },
    { time: '1h ago', tag: 'NEW', title: 'Component added', ic: '🧩' },
    { time: '12h ago', tag: 'DONE', title: 'Analytics updated', ic: '📈' },
    { time: '5h ago', tag: 'SYNC', title: 'Database mirrored', ic: '🗄️' },
    { time: '1h ago', tag: 'NEW', title: 'Component added', ic: '🧩' },
    { time: '5h ago', tag: 'SYNC', title: 'Database mirrored', ic: '🗄️' },
  ];
  return (
    <V3Container>
      <div className="device-frame">
        <div className="shadow-belt" />
        <div className="feed-track">
          {feed.map((f, i) => (
            <div className="card-item" key={i}>
              <div className="headerline">
                <span className="timestamp">{f.time}</span>
                <span className="badge-tag">{f.tag}</span>
              </div>
              <div className="title-area">
                <div className="sq-icon">{f.ic}</div>
                <div className="main-txt">{f.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </V3Container>
  );
};

// 4. TRANSPARENT PRICING
const V4Container = styled.div`
  height: 280px;
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1.5rem;
  margin-bottom: 1.5rem;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 220px;

    .envelope-wrap {
      transform: scale(0.85);
    }
  }

  .envelope-wrap {
    position: relative;
    width: 250px;
    height: 180px;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  .env-back {
    position: absolute;
    bottom: 0px; width: 100%; height: 130px;
    background: #E0E0E0;
    border-radius: 14px;
    box-shadow: inset 0 20px 40px rgba(0,0,0,0.04);
    z-index: 1;
  }

  .env-front {
    position: absolute;
    bottom: 0px; width: 104%; height: 90px;
    background: #F4F4F4;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
    z-index: 4;
    box-shadow: 0 -4px 15px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.8);
    clip-path: polygon(0 0, 50% 35px, 100% 0, 100% 100%, 0 100%);
  }

  .paper {
    position: absolute;
    width: 160px; height: 130px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 -10px 30px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(0,0,0,0.03);
    z-index: 2;
    display: flex; flex-direction: column;
    padding: 1.25rem;
    
    .head { display:flex; align-items:center; gap:8px; margin-bottom: 10px; }
    .icon-box { width: 24px; height: 24px; background: #f0f0f0; border-radius: 6px; }
    .text { font-size: 0.70rem; font-weight: 700; color: #555; }
    
    .cost { font-size: 1.7rem; font-weight: 700; color: #111; letter-spacing: -1px; margin-bottom:2px;}
    .sub { font-size: 0.7rem; color: #888; font-weight: 500;}
    
    .divider { height: 1px; background: #eee; margin: 10px 0; }
    
    .row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; }
    .skel { height: 4px; border-radius: 2px; background: #ddd; width: 40px; }
    .skel.long { width: 60px; }
  }

  .p1 { bottom: 35px; left: 10px; transform-origin: bottom left; animation: popTicket1 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate; }
  .p2 { bottom: 45px; right: 10px; z-index: 3; transform-origin: bottom right; background: #FAFAFA; animation: popTicket2 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate; }

  @keyframes popTicket1 {
    0% { transform: translateY(10px) rotate(-6deg); }
    100% { transform: translateY(-20px) rotate(-14deg); }
  }
  @keyframes popTicket2 {
    0% { transform: translateY(15px) rotate(4deg); }
    100% { transform: translateY(-12px) rotate(10deg); }
  }
`;

const Visual4 = () => (
  <V4Container>
    <div className="envelope-wrap">
      <div className="env-back" />
      <div className="paper p1">
        <div className="head"><div className="icon-box" style={{ background: '#FFE0E0' }} /><div className="text">App Design</div></div>
        <div className="cost">$2,500</div>
        <div className="sub">Final Quote</div>
        <div className="divider" />
        <div className="row"><div className="skel long" /><div className="skel" /></div>
      </div>
      <div className="paper p2">
        <div className="head"><div className="icon-box" style={{ background: '#E0F2FE' }} /><div className="text">Web Build</div></div>
        <div className="cost">$3,800</div>
        <div className="sub">Final Quote</div>
        <div className="divider" />
        <div className="row"><div className="skel long" /><div className="skel" /></div>
      </div>
      <div className="env-front" />
    </div>
  </V4Container>
);

// --- Parent Container ---
const BentoCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 2.2rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 480px;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  position: relative;
  
  &:hover {
    transform: translateY(-8px);
    background: ${({ theme }) => theme.colors.surfaceHover};
    border-color: rgba(0,0,0,0.1);
    box-shadow: 0 30px 60px -15px rgba(0,0,0,0.08);
  }

  .content {
    padding: 0 1rem 1rem;
    margin-top: 1.5rem;
    
    h3 {
      font-size: ${({ theme }) => theme.typography.h3};
      margin-bottom: 0.8rem;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.text.primary};
      letter-spacing: -0.5px;
    }

    p {
      color: ${({ theme }) => theme.colors.text.secondary};
      font-size: ${({ theme }) => theme.typography.body};
      line-height: 1.6;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    min-height: unset;
    border-radius: 1.5rem;
    padding: 1rem;

    .content {
      padding: 0 0.5rem 0.5rem;
      margin-top: 1rem;

      h3 { font-size: 1.25rem; }
      p { font-size: 0.9rem; }
    }
  }
`;


const Features = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.feature-card',
        { y: 60, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out'
        }
      );

      gsap.fromTo('.feature-header',
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: 'power3.out'
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const featuresList = [
    {
      visual: <Visual1 />,
      title: 'Quick Delivery',
      desc: 'We work with one project at a time — so you get results faster, without the chaos.'
    },
    {
      visual: <Visual2 />,
      title: 'Custom-Made Design',
      desc: 'Every layout is designed from scratch to reflect your brand, not a template.'
    },
    {
      visual: <Visual3 />,
      title: 'Built to Scale',
      desc: 'We create flexible systems that are easy to update as your business evolves.'
    },
    {
      visual: <Visual4 />,
      title: 'Transparent Pricing',
      desc: 'No hidden costs. Just clear, fixed rates that fit your scope and budget.'
    }
  ];

  return (
    <Section ref={sectionRef} id="features">
      <Container>
        <Header className="feature-header">
          <div className="badge">Features</div>
          <h2>Built for Founders Who Want More</h2>
          <p>We focus on speed, clarity, and results — so you can focus on growth.</p>
        </Header>
        <Grid>
          {featuresList.map((f, i) => (
            <BentoCard key={i} className="feature-card">
              {f.visual}
              <div className="content">
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            </BentoCard>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Features;
