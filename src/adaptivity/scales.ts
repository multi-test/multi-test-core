export type RawAdaptivityScales = {
    L1_L: number;
    L1_F: number;
    L1_К: number;
    L1_Hs: number;
    L1_D: number;
    L1_Hy: number;
    L1_Pd: number;
    L1_Mf: number;
    L1_Pa: number;
    L1_Pt: number;
    L1_Sc: number;
    L1_Ma: number;
    L1_Si: number;
    L2_AS: number;
    L2_PS: number;
    L2_DAN: number;
    L3_TRUST: number;
    L3_PR: number;
    L3_KP: number;
    L3_MP: number;
    L4_LAP: number;
};

export type StenAdaptivityScales = {
    L1_L_T: number;
    L1_F_T: number;
    L1_К_T: number;
    L1_Hs_T: number;
    L1_D_T: number;
    L1_Hy_T: number;
    L1_Pd_T: number;
    L1_Mf_T: number;
    L1_Pa_T: number;
    L1_Pt_T: number;
    L1_Sc_T: number;
    L1_Ma_T: number;
    L1_Si_T: number;
    L2_AS_S: number;
    L2_PS_S: number;
    L2_DAN_S: number;
    L3_PR_S: number;
    L3_KP_S: number;
    L3_MP_S: number;
    L4_LAP_S: number;
};

export type AdaptivityScales = RawAdaptivityScales & StenAdaptivityScales;

export function createBlankScales(v: number): AdaptivityScales {
    return {
        L1_L: v,
        L1_F: v,
        L1_К: v,
        L1_Hs: v,
        L1_D: v,
        L1_Hy: v,
        L1_Pd: v,
        L1_Mf: v,
        L1_Pa: v,
        L1_Pt: v,
        L1_Sc: v,
        L1_Ma: v,
        L1_Si: v,
        L2_AS: v,
        L2_PS: v,
        L2_DAN: v,
        L3_TRUST: v,
        L3_PR: v,
        L3_KP: v,
        L3_MP: v,
        L4_LAP: v,
        L1_L_T: v,
        L1_F_T: v,
        L1_К_T: v,
        L1_Hs_T: v,
        L1_D_T: v,
        L1_Hy_T: v,
        L1_Pd_T: v,
        L1_Mf_T: v,
        L1_Pa_T: v,
        L1_Pt_T: v,
        L1_Sc_T: v,
        L1_Ma_T: v,
        L1_Si_T: v,
        L2_AS_S: v,
        L2_PS_S: v,
        L2_DAN_S: v,
        L3_PR_S: v,
        L3_KP_S: v,
        L3_MP_S: v,
        L4_LAP_S: v,
    };
}
