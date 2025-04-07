"use client";

import { Box, Button, MenuItem, Select, Slider, Stack } from "@mui/material";
import { sxStyles } from "./sxStyles";
import { useState } from "react";
import styles from "./calculator.module.css";
import { costsTempMock } from "./costsTempMock";
import { t } from "@/language";

interface IProps {
  lan: "pt" | "en" | "es";
  exchanges: {
    usdBrl: number;
    usdEur: number;
  } | null;
}

export const SlidersContainer = ({ lan, exchanges }: IProps) => {
  const text = t[lan].calculator;

  const currencyLan =
    !exchanges || lan === "en" ? "USD" : lan === "pt" ? "BRL" : "EUR";
  const conversion =
    currencyLan === "BRL"
      ? exchanges?.usdBrl
      : currencyLan === "EUR"
      ? exchanges?.usdEur
      : 1;

  const lanByCurrency = {
    BRL: "pt-BR",
    EUR: "es-ES",
    USD: "en-US",
  };

  // fazer a slider do cpu com marks
  // const allowedValues = [1, 2, 4, 8, 16, 32];
  // const [cpuIndex, setCpuIndex] = useState(0);
  // const cpu = allowedValues[cpuIndex];
  // const handleCpuSliderChange = (_: Event, newValue: number | number[]) => {
  //   const newIndex =
  //     Number(newValue) > cpu
  //       ? cpuIndex + 1
  //       : Number(newValue) < cpu
  //       ? cpuIndex - 1
  //       : cpuIndex;
  //   const newCpuIndex =
  //     newIndex < 0
  //       ? 0
  //       : newIndex > allowedValues.length - 1
  //       ? allowedValues.length - 1
  //       : newIndex;
  //   setCpuIndex(newCpuIndex);
  // };

  const minMemory = 1;
  const maxMemory = 32;
  const minCPU = 0;
  const maxCPU = 32;
  const minDisk = 50;
  const maxDisk = 2000;

  const [memory, setMemory] = useState(minMemory);
  const [cpu, setCpu] = useState(1);
  const [disk, setDisk] = useState(minDisk);
  const [os, setOs] = useState<string | null>("ubuntu24");
  const [osIsOpen, setOsIsOpen] = useState(false);

  const memoryCost =
    memory * costsTempMock.memoryUnitPrice * (conversion as number) * 30;
  const cpuCost =
    cpu * costsTempMock.vCpuUnitPrice * (conversion as number) * 30;
  const diskCost =
    disk * costsTempMock.storageUnitPrice * (conversion as number) * 30;
  const totalCost = memoryCost + cpuCost + diskCost;

  const handleContractBtn = () => {
    window.location.href = "https://vituax.cloud/login";
  };

  const handleCpuSliderChange = (_: Event, newValue: number | number[]) => {
    if (Number(newValue) <= 1) {
      return setCpu(1);
    }
    if (Number(newValue) < 3) {
      return setCpu(2);
    }
    if (Number(newValue) < 6) {
      return setCpu(4);
    }
    if (Number(newValue) < 12) {
      return setCpu(8);
    }
    if (Number(newValue) < 22) {
      return setCpu(16);
    }
    if (Number(newValue) >= 22) {
      return setCpu(32);
    }
  };

  return (
    <Stack sx={sxStyles.sliderContainer}>
      <p className={styles.label}>{text.os}</p>
      <Select
        value={os}
        onChange={(e) => {
          if (e.target.value === "ubuntu22") {
            return setOs(null);
          }
          setOs(e.target.value);
        }}
        onOpen={() => setOsIsOpen(true)}
        onClose={() => setOsIsOpen(false)}
        sx={{
          ...sxStyles.select,
          ".MuiSelect-icon": {
            color: "#3D04AA",
            transform: osIsOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease-in-out",
          },
        }}
      >
        <MenuItem value="ubuntu24">Ubuntu 24</MenuItem>
        <MenuItem value="ubuntu22">Ubuntu 22</MenuItem>
        <MenuItem value="ubuntu20">Ubuntu 20</MenuItem>
        <MenuItem value="debian12">Debian 12</MenuItem>
      </Select>

      <Box sx={sxStyles.labelBox}>
        <p className={styles.label}>
          {text.memoryLabel} <span>{`${memory} GB`}</span>
        </p>
        <p className={styles.label}>
          {memoryCost.toLocaleString(lanByCurrency[currencyLan], {
            style: "currency",
            currency: currencyLan,
          })}
        </p>
      </Box>
      <Slider
        value={memory}
        onChange={(_, newValue) =>
          setMemory((newValue as number) < 1 ? 1 : (newValue as number))
        }
        min={0}
        max={maxMemory}
        step={1}
        sx={sxStyles.slider}
      />

      <Box sx={sxStyles.labelBox}>
        <p className={styles.label}>
          {text.cpuLabel} <span>{`${cpu} vCPU`}</span>
        </p>
        <p className={styles.label}>
          {cpuCost.toLocaleString(lanByCurrency[currencyLan], {
            style: "currency",
            currency: currencyLan,
          })}
        </p>
      </Box>
      <Slider
        value={cpu}
        onChange={handleCpuSliderChange}
        min={minCPU}
        max={maxCPU}
        step={1}
        // marks={allowedValues.map((_val, index) => ({
        //   value: index,
        // }))}
        sx={sxStyles.slider}
      />
      <Box sx={sxStyles.labelBox}>
        <p className={styles.label}>
          {text.diskLabel} <span>{`${disk} GB`}</span>
        </p>
        <p className={styles.label}>
          {diskCost.toLocaleString(lanByCurrency[currencyLan], {
            style: "currency",
            currency: currencyLan,
          })}
        </p>
      </Box>
      <Slider
        value={disk}
        onChange={() => setDisk(Number("aa"))}
        min={0}
        max={maxDisk}
        step={50}
        sx={sxStyles.slider}
      />
      <Box sx={sxStyles.labelBox}>
        <p className={styles.label}>{text.trafficLabel}</p>
        <p className={styles.labelFree}>{text.free}</p>
      </Box>

      <div
        style={{
          width: "100%",
          marginTop: "36px",
          borderRadius: "4px",
          height: "4px",
          background: "#087450",
        }}
      />
      <Box sx={sxStyles.buttonContainer}>
        <Button
          variant="contained"
          sx={sxStyles.button}
          onClick={() => handleContractBtn()}
        >
          {text.contractButton}
        </Button>
        <div className={styles.totalBox}>
          <p className={styles.totalText}>{text.total}</p>
          <p className={styles.totalText}>
            <span className={styles.priceText}>
              {totalCost.toLocaleString(lanByCurrency[currencyLan], {
                style: "currency",
                currency: currencyLan,
              })}
            </span>
            {text.monthly}
          </p>
        </div>
      </Box>
    </Stack>
  );
};
