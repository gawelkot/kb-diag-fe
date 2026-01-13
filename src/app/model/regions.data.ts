import {IRegion} from "./diag";

export const REGIONS: IRegion[] = [
  {
    "name": "chest-stomach-abdomen",
    "namePl": "brzuch",
    "translateName": "CHEST-STOMACH-ABDOMEN",
    "abbreviation": "B",
    "types": [
      {
        "name": "Pain",
        "namePl": "",
        "translateName": "PAIN",
        "symptoms": [
          {
            "name": "Abdominal",
            "namePl": "brzuszny",
            "translateName": "ABDOMINAL",
            "muscles": [
              {
                "name": "rectus abdominis",
                "namePl": "prosty brzucha"
              },
              {
                "name": "abdominal obliques",
                "namePl": ""
              },
              {
                "name": "iliocostalis",
                "namePl": ""
              },
              {
                "name": "deep spinal muscles",
                "namePl": ""
              },
              {
                "name": "quadratus lumborum",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Chest",
            "namePl": "",
            "translateName": "CHEST",
            "muscles": [
              {
                "name": "pectoralis major",
                "namePl": ""
              },
              {
                "name": "pectoralis minor",
                "namePl": ""
              },
              {
                "name": "scalenes",
                "namePl": ""
              },
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              },
              {
                "name": "sternalis",
                "namePl": ""
              },
              {
                "name": "intercostals",
                "namePl": ""
              },
              {
                "name": "iliocostalis",
                "namePl": ""
              },
              {
                "name": "subclavius",
                "namePl": ""
              },
              {
                "name": "abdominal obliques",
                "namePl": ""
              },
              {
                "name": "diaphragm",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Genital",
            "namePl": "",
            "translateName": "GENITAL",
            "muscles": [
              {
                "name": "pelvic floor muscles",
                "namePl": ""
              },
              {
                "name": "abdominal obliques",
                "namePl": ""
              },
              {
                "name": "adductor magnus",
                "namePl": ""
              },
              {
                "name": "rectus abdominis",
                "namePl": "prosty brzucha"
              },
              {
                "name": "gluteus maximus",
                "namePl": ""
              },
              {
                "name": "piriformis",
                "namePl": ""
              },
              {
                "name": "psoas",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Side",
            "namePl": "",
            "translateName": "SIDE",
            "muscles": [
              {
                "name": "serratus anterior",
                "namePl": ""
              },
              {
                "name": "abdominal obliques",
                "namePl": ""
              },
              {
                "name": "intercostals",
                "namePl": ""
              },
              {
                "name": "latissimus dorsi",
                "namePl": ""
              },
              {
                "name": "diaphragm",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "General symtpoms",
        "namePl": "",
        "translateName": "GENERAL SYMTPOMS",
        "symptoms": [
          {
            "name": "Belching",
            "namePl": "",
            "translateName": "BELCHING",
            "muscles": [
              {
                "name": "abdominal obliques",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Bladder Pain or Frequency",
            "namePl": "",
            "translateName": "BLADDER PAIN OR FREQUENCY",
            "muscles": [
              {
                "name": "adductor magnus",
                "namePl": ""
              },
              {
                "name": "abdominal obliques",
                "namePl": ""
              },
              {
                "name": "piriformis (and other deep lateral rotators)",
                "namePl": ""
              },
              {
                "name": "pelvic floor",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Breast or Nipple Hypersensitivity",
            "namePl": "",
            "translateName": "BREAST OR NIPPLE HYPERSENSITIVITY",
            "muscles": [
              {
                "name": "pectoralis major",
                "namePl": ""
              },
              {
                "name": "serratus anterior",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Cardiac Arrhythmia",
            "namePl": "",
            "translateName": "CARDIAC ARRHYTHMIA",
            "muscles": [
              {
                "name": "pectoralis major",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Cardiac Ischemia or Angina (false)",
            "namePl": "",
            "translateName": "CARDIAC ISCHEMIA OR ANGINA (FALSE)",
            "muscles": [
              {
                "name": "pectoralis major",
                "namePl": ""
              },
              {
                "name": "pectoralis minor",
                "namePl": ""
              },
              {
                "name": "sternalis",
                "namePl": ""
              },
              {
                "name": "superficial spinal",
                "namePl": ""
              },
              {
                "name": "iliocostalis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Chronic Pelvic Pain",
            "namePl": "",
            "translateName": "CHRONIC PELVIC PAIN",
            "muscles": [
              {
                "name": "Gynecological or Menstrual Pain",
                "namePl": ""
              },
              {
                "name": "abdominal obliques",
                "namePl": ""
              },
              {
                "name": "rectus abdominis",
                "namePl": "prosty brzucha"
              },
              {
                "name": "adductor magnus",
                "namePl": ""
              },
              {
                "name": "pelvic floor",
                "namePl": ""
              },
              {
                "name": "piriformis/deep rotators",
                "namePl": ""
              },
              {
                "name": "psoas/iliacus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Coccyx (tailbone) Pain or Tenderness",
            "namePl": "",
            "translateName": "COCCYX (TAILBONE) PAIN OR TENDERNESS",
            "muscles": [
              {
                "name": "gluteus maximus",
                "namePl": ""
              },
              {
                "name": "multifidi",
                "namePl": ""
              },
              {
                "name": "pelvic floor (levator ani",
                "namePl": ""
              },
              {
                "name": "coccygeus",
                "namePl": ""
              },
              {
                "name": "sphincter ani",
                "namePl": ""
              },
              {
                "name": "and obturator internus)",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Colic",
            "namePl": "",
            "translateName": "COLIC",
            "muscles": [
              {
                "name": "rectus abdominis",
                "namePl": "prosty brzucha"
              }
            ]
          },
          {
            "name": "Costochondritis",
            "namePl": "",
            "translateName": "COSTOCHONDRITIS",
            "muscles": [
              {
                "name": "pectoralis major",
                "namePl": ""
              },
              {
                "name": "serratus anterior",
                "namePl": ""
              },
              {
                "name": "intercostal",
                "namePl": ""
              },
              {
                "name": "diaphragm",
                "namePl": ""
              },
              {
                "name": "abdominal obliques",
                "namePl": ""
              },
              {
                "name": "rectus abdominis",
                "namePl": "prosty brzucha"
              }
            ]
          },
          {
            "name": "Forward-Head Posture (slouching)",
            "namePl": "",
            "translateName": "FORWARD-HEAD POSTURE (SLOUCHING)",
            "muscles": [
              {
                "name": "rectus abdominis",
                "namePl": "prosty brzucha"
              },
              {
                "name": "abdominal obliques",
                "namePl": ""
              },
              {
                "name": "pectoralis major",
                "namePl": ""
              },
              {
                "name": "pectoralis minor",
                "namePl": ""
              },
              {
                "name": "sternalis",
                "namePl": ""
              },
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              },
              {
                "name": "scalenes",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Heartburn",
            "namePl": "",
            "translateName": "HEARTBURN",
            "muscles": [
              {
                "name": "upper abdominal obliques",
                "namePl": ""
              },
              {
                "name": "rectus abdominis",
                "namePl": "prosty brzucha"
              }
            ]
          },
          {
            "name": "Impotence",
            "namePl": "",
            "translateName": "IMPOTENCE",
            "muscles": [
              {
                "name": "piriformis",
                "namePl": ""
              },
              {
                "name": "pelvic floor (bulbospongiosus)",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Indigestion",
            "namePl": "",
            "translateName": "INDIGESTION",
            "muscles": [
              {
                "name": "rectus abdominis",
                "namePl": "prosty brzucha"
              }
            ]
          },
          {
            "name": "Nausea",
            "namePl": "",
            "translateName": "NAUSEA",
            "muscles": [
              {
                "name": "rectus abdominis",
                "namePl": "prosty brzucha"
              }
            ]
          },
          {
            "name": "Pain with Breathing Coughing Sneezing or Difficulty Taking a Full Breath",
            "namePl": "",
            "translateName": "PAIN WITH BREATHING COUGHING SNEEZING OR DIFFICULTY TAKING A FULL BREATH",
            "muscles": [
              {
                "name": "scalenes",
                "namePl": ""
              },
              {
                "name": "serratus anterior",
                "namePl": ""
              },
              {
                "name": "pectoralis minor",
                "namePl": ""
              },
              {
                "name": "pectoralis major",
                "namePl": ""
              },
              {
                "name": "diaphragm",
                "namePl": ""
              },
              {
                "name": "intercostals",
                "namePl": ""
              },
              {
                "name": "abdominal obliques",
                "namePl": ""
              },
              {
                "name": "rectus abdominis",
                "namePl": "prosty brzucha"
              },
              {
                "name": "latissimus dorsi",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Penis Pain",
            "namePl": "",
            "translateName": "PENIS PAIN",
            "muscles": [
              {
                "name": "rectus abdominis",
                "namePl": "prosty brzucha"
              },
              {
                "name": "pelvic floor (ischiocavernosus and bulbospongiosus)",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Perineum",
            "namePl": "",
            "translateName": "PERINEUM",
            "muscles": [
              {
                "name": "piriformis",
                "namePl": ""
              },
              {
                "name": "pelvic floor (levator ani",
                "namePl": ""
              },
              {
                "name": "bulbospongiosus",
                "namePl": ""
              },
              {
                "name": "ischiocavenosus)",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Pseudo-Appendicitis",
            "namePl": "",
            "translateName": "PSEUDO-APPENDICITIS",
            "muscles": [
              {
                "name": "rectus abdominis",
                "namePl": "prosty brzucha"
              }
            ]
          },
          {
            "name": "Rectal Pain and Sense of Fullness",
            "namePl": "",
            "translateName": "RECTAL PAIN AND SENSE OF FULLNESS",
            "muscles": [
              {
                "name": "adductor magnus",
                "namePl": ""
              },
              {
                "name": "pelvic floor (levator ani",
                "namePl": ""
              },
              {
                "name": "obturator internus",
                "namePl": ""
              },
              {
                "name": "and sphincter ani)",
                "namePl": ""
              },
              {
                "name": "piriformis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Scrotum Pain",
            "namePl": "",
            "translateName": "SCROTUM PAIN",
            "muscles": [
              {
                "name": "quadratus lumborum",
                "namePl": ""
              },
              {
                "name": "psoas/iliacus",
                "namePl": ""
              },
              {
                "name": "pelvic floor (bulbospongiosus)",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Testicular Pain",
            "namePl": "",
            "translateName": "TESTICULAR PAIN",
            "muscles": [
              {
                "name": "abdominal obliques",
                "namePl": ""
              },
              {
                "name": "pelvic floor (bulbospongiosus and ischiocavernosus)",
                "namePl": ""
              },
              {
                "name": "quadratus lumborum",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Urinary Frequency or Urgency",
            "namePl": "",
            "translateName": "URINARY FREQUENCY OR URGENCY",
            "muscles": [
              {
                "name": "abdominal obliques",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Urinary Incontinence",
            "namePl": "",
            "translateName": "URINARY INCONTINENCE",
            "muscles": [
              {
                "name": "pelvic floor",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Urinary Retention",
            "namePl": "",
            "translateName": "URINARY RETENTION",
            "muscles": [
              {
                "name": "abdominal obliques",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Urinary Sphincter Spasm",
            "namePl": "",
            "translateName": "URINARY SPHINCTER SPASM",
            "muscles": [
              {
                "name": "rectus abdominis",
                "namePl": "prosty brzucha"
              }
            ]
          },
          {
            "name": "Vaginal Pain or Vulvodynia",
            "namePl": "",
            "translateName": "VAGINAL PAIN OR VULVODYNIA",
            "muscles": [
              {
                "name": "abdominal obliques",
                "namePl": ""
              },
              {
                "name": "adductor magnus",
                "namePl": ""
              },
              {
                "name": "pelvic floor (levator ani",
                "namePl": ""
              },
              {
                "name": "bulbospongiosus",
                "namePl": ""
              },
              {
                "name": "ischiocavernosus",
                "namePl": ""
              },
              {
                "name": "and obturator internus)",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Vomiting Projectile",
            "namePl": "",
            "translateName": "VOMITING PROJECTILE",
            "muscles": [
              {
                "name": "abdominal obliques",
                "namePl": ""
              },
              {
                "name": "rectus abdominis",
                "namePl": "prosty brzucha"
              }
            ]
          }
        ]
      },
      {
        "name": "Pain or Trouble with Motion",
        "namePl": "",
        "translateName": "PAIN OR TROUBLE WITH MOTION",
        "symptoms": [
          {
            "name": "Bending and Lifting",
            "namePl": "",
            "translateName": "BENDING AND LIFTING",
            "muscles": [
              {
                "name": "rectus abdominis",
                "namePl": "prosty brzucha"
              }
            ]
          },
          {
            "name": "Bowel Movement",
            "namePl": "",
            "translateName": "BOWEL MOVEMENT",
            "muscles": [
              {
                "name": "pelvic floor (sphincter ani)",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Ejaculation",
            "namePl": "",
            "translateName": "EJACULATION",
            "muscles": [
              {
                "name": "pelvic floor (bulbospongiosus)",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Lying Flat on the Back",
            "namePl": "",
            "translateName": "LYING FLAT ON THE BACK",
            "muscles": [
              {
                "name": "pelvic floor (levator ani)",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Reaching Out and Behind",
            "namePl": "",
            "translateName": "REACHING OUT AND BEHIND",
            "muscles": [
              {
                "name": "pectoralis major",
                "namePl": ""
              },
              {
                "name": "pectoralis minor",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Rising from a Chair",
            "namePl": "",
            "translateName": "RISING FROM A CHAIR",
            "muscles": [
              {
                "name": "superficial spinal muscles",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Side Bending",
            "namePl": "",
            "translateName": "SIDE BENDING",
            "muscles": [
              {
                "name": "abdominal obliques",
                "namePl": ""
              },
              {
                "name": "superficial spinal muscles",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Sitting",
            "namePl": "",
            "translateName": "SITTING",
            "muscles": [
              {
                "name": "pelvic floor (levator ani and coccygeus)",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Twisting",
            "namePl": "",
            "translateName": "TWISTING",
            "muscles": [
              {
                "name": "intercostals",
                "namePl": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "center-bottom-back-buttock",
    "namePl": "plecy",
    "translateName": "CENTER-BOTTOM-BACK-BUTTOCK",
    "abbreviation": "P",
    "types": [
      {
        "name": "PAIN",
        "namePl": "",
        "translateName": "PAIN",
        "symptoms": [
          {
            "name": "Buttock",
            "namePl": "",
            "translateName": "BUTTOCK",
            "muscles": [
              {
                "name": "gluteus medius",
                "namePl": ""
              },
              {
                "name": "quadratus lumborum",
                "namePl": ""
              },
              {
                "name": "gluteus maximus",
                "namePl": ""
              },
              {
                "name": "superficial spinal muscles",
                "namePl": ""
              },
              {
                "name": "semitendinosus",
                "namePl": ""
              },
              {
                "name": "semimembranosus",
                "namePl": ""
              },
              {
                "name": "piriformis",
                "namePl": ""
              },
              {
                "name": "gluteus minimus",
                "namePl": ""
              },
              {
                "name": "rectus abdominis",
                "namePl": "prosty brzucha"
              },
              {
                "name": "soleus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Coccyx (tailbone)",
            "namePl": "",
            "translateName": "COCCYX (TAILBONE)",
            "muscles": [
              {
                "name": "pelvic floor muscles (levator ani",
                "namePl": ""
              },
              {
                "name": "coccygeus)",
                "namePl": ""
              },
              {
                "name": "gluteus maximus",
                "namePl": ""
              },
              {
                "name": "deep spinal muscles",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Hip",
            "namePl": "",
            "translateName": "HIP",
            "muscles": [
              {
                "name": "gluteus minimus",
                "namePl": ""
              },
              {
                "name": "vastus lateralis",
                "namePl": ""
              },
              {
                "name": "piriformis",
                "namePl": ""
              },
              {
                "name": "quadratus lumborum",
                "namePl": ""
              },
              {
                "name": "tensor fasciae latae",
                "namePl": ""
              },
              {
                "name": "adductor longus and brevis",
                "namePl": ""
              },
              {
                "name": "gluteus maximus",
                "namePl": ""
              },
              {
                "name": "rectus femoris",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Low Back",
            "namePl": "",
            "translateName": "LOW BACK",
            "muscles": [
              {
                "name": "gluteus medius",
                "namePl": ""
              },
              {
                "name": "psoas/iliacus",
                "namePl": ""
              },
              {
                "name": "deep spinal muscles",
                "namePl": ""
              },
              {
                "name": "superficial spinal muscles",
                "namePl": ""
              },
              {
                "name": "quadratus lumborum",
                "namePl": ""
              },
              {
                "name": "gluteus maximus",
                "namePl": ""
              },
              {
                "name": "rectus abdominis",
                "namePl": "prosty brzucha"
              },
              {
                "name": "soleus",
                "namePl": ""
              },
              {
                "name": "pelvic floor muscles",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Midback",
            "namePl": "",
            "translateName": "MIDBACK",
            "muscles": [
              {
                "name": "superficial spinal muscles",
                "namePl": ""
              },
              {
                "name": "deep spinal muscles",
                "namePl": ""
              },
              {
                "name": "serratus posterior inferior",
                "namePl": ""
              },
              {
                "name": "rectus abdominis",
                "namePl": "prosty brzucha"
              },
              {
                "name": "intercostals",
                "namePl": ""
              },
              {
                "name": "latissimus dorsi",
                "namePl": ""
              },
              {
                "name": "serratus anterior",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Sacrum",
            "namePl": "",
            "translateName": "SACRUM",
            "muscles": [
              {
                "name": "pelvic floor muscles",
                "namePl": ""
              },
              {
                "name": "gluteus medius",
                "namePl": ""
              },
              {
                "name": "quadratus lumborum",
                "namePl": ""
              },
              {
                "name": "gluteus maximus",
                "namePl": ""
              },
              {
                "name": "deep spinal muscles",
                "namePl": ""
              },
              {
                "name": "rectus abdominis",
                "namePl": "prosty brzucha"
              },
              {
                "name": "soleus",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "Leg-Length Inequality (mechanical",
        "namePl": "",
        "translateName": "LEG-LENGTH INEQUALITY (MECHANICAL",
        "symptoms": [
          {
            "name": "Anterior Pelvic Tilt",
            "namePl": "",
            "translateName": "ANTERIOR PELVIC TILT",
            "muscles": [
              {
                "name": "iliacus",
                "namePl": ""
              },
              {
                "name": "tensor fasciae latae",
                "namePl": ""
              },
              {
                "name": "rectus femoris",
                "namePl": ""
              },
              {
                "name": "gluteus medius",
                "namePl": ""
              },
              {
                "name": "adductor longus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Pelvic Upslip",
            "namePl": "",
            "translateName": "PELVIC UPSLIP",
            "muscles": [
              {
                "name": "quadratus lumborum",
                "namePl": ""
              },
              {
                "name": "superficial spinal muscles",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Posterior Pelvic Tilt",
            "namePl": "",
            "translateName": "POSTERIOR PELVIC TILT",
            "muscles": [
              {
                "name": "semimembranosus",
                "namePl": ""
              },
              {
                "name": "semitendinosus",
                "namePl": ""
              },
              {
                "name": "biceps femoris",
                "namePl": ""
              },
              {
                "name": "rectus abdominis",
                "namePl": "prosty brzucha"
              },
              {
                "name": "adductor magnus",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "Pain or Trouble with Motion",
        "namePl": "",
        "translateName": "PAIN OR TROUBLE WITH MOTION",
        "symptoms": [
          {
            "name": "Coughing or Sneezing",
            "namePl": "",
            "translateName": "COUGHING OR SNEEZING",
            "muscles": [
              {
                "name": "rectus abdominis",
                "namePl": "prosty brzucha"
              },
              {
                "name": "quadratus lumborum",
                "namePl": ""
              },
              {
                "name": "serratus posterior inferior",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Forced to Crawl on All Fours",
            "namePl": "",
            "translateName": "FORCED TO CRAWL ON ALL FOURS",
            "muscles": [
              {
                "name": "quadratus lumborum",
                "namePl": ""
              },
              {
                "name": "psoas/iliacus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Forward Flexion (bending)",
            "namePl": "",
            "translateName": "FORWARD FLEXION (BENDING)",
            "muscles": [
              {
                "name": "superficial spinal",
                "namePl": ""
              },
              {
                "name": "quadratus lumborum",
                "namePl": ""
              },
              {
                "name": "deep spinal muscles",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Going Down Stairs or Hills",
            "namePl": "",
            "translateName": "GOING DOWN STAIRS OR HILLS",
            "muscles": [
              {
                "name": "soleus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Going Up Stairs or Hills",
            "namePl": "",
            "translateName": "GOING UP STAIRS OR HILLS",
            "muscles": [
              {
                "name": "superficial spinal muscles",
                "namePl": ""
              },
              {
                "name": "gluteus maximus",
                "namePl": ""
              },
              {
                "name": "quadratus lumborum",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Hypersensitivity to Touch",
            "namePl": "",
            "translateName": "HYPERSENSITIVITY TO TOUCH",
            "muscles": [
              {
                "name": "superficial spinal muscles",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Lifting",
            "namePl": "",
            "translateName": "LIFTING",
            "muscles": [
              {
                "name": "quadratus lumborum",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Lying Down on Your Back",
            "namePl": "",
            "translateName": "LYING DOWN ON YOUR BACK",
            "muscles": [
              {
                "name": "gluteus medius",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Lying Down on Your Side",
            "namePl": "",
            "translateName": "LYING DOWN ON YOUR SIDE",
            "muscles": [
              {
                "name": "quadratus lumborum",
                "namePl": ""
              },
              {
                "name": "gluteus minimus",
                "namePl": ""
              },
              {
                "name": "gluteus medius",
                "namePl": ""
              },
              {
                "name": "piriformis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Rising from a Low Chair or Car Seat",
            "namePl": "",
            "translateName": "RISING FROM A LOW CHAIR OR CAR SEAT",
            "muscles": [
              {
                "name": "superficial spinal muscles",
                "namePl": ""
              },
              {
                "name": "gluteus minimus",
                "namePl": ""
              },
              {
                "name": "gluteus maximus",
                "namePl": ""
              },
              {
                "name": "quadratus lumborum",
                "namePl": ""
              },
              {
                "name": "psoas/iliacus",
                "namePl": ""
              },
              {
                "name": "piriformis",
                "namePl": ""
              },
              {
                "name": "semimembranosus",
                "namePl": ""
              },
              {
                "name": "semitendinosus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Side Bending",
            "namePl": "",
            "translateName": "SIDE BENDING",
            "muscles": [
              {
                "name": "quadratus lumborum",
                "namePl": ""
              },
              {
                "name": "superficial spinal muscles",
                "namePl": ""
              },
              {
                "name": "abdominal obliques",
                "namePl": ""
              },
              {
                "name": "deep spinal muscles",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Sitting",
            "namePl": "",
            "translateName": "SITTING",
            "muscles": [
              {
                "name": "quadratus lumborum",
                "namePl": ""
              },
              {
                "name": "piriformis",
                "namePl": ""
              },
              {
                "name": "gluteus maximus",
                "namePl": ""
              },
              {
                "name": "gluteus medius",
                "namePl": ""
              },
              {
                "name": "semimembranosus",
                "namePl": ""
              },
              {
                "name": "semitendinosus",
                "namePl": ""
              },
              {
                "name": "pelvic floor",
                "namePl": ""
              },
              {
                "name": "intrapelvic",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Sit-Ups",
            "namePl": "",
            "translateName": "SIT-UPS",
            "muscles": [
              {
                "name": "psoas/iliacus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Standing",
            "namePl": "",
            "translateName": "STANDING",
            "muscles": [
              {
                "name": "psoas/iliacus",
                "namePl": ""
              },
              {
                "name": "quadratus lumborum",
                "namePl": ""
              },
              {
                "name": "gluteus minimus",
                "namePl": ""
              },
              {
                "name": "piriformis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Standing and Leaning Forward",
            "namePl": "",
            "translateName": "STANDING AND LEANING FORWARD",
            "muscles": [
              {
                "name": "quadratus lumborum",
                "namePl": ""
              },
              {
                "name": "superficial spinal muscles",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Swayback (exaggerated lumbar curve)",
            "namePl": "",
            "translateName": "SWAYBACK (EXAGGERATED LUMBAR CURVE)",
            "muscles": [
              {
                "name": "psoas",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Swimming",
            "namePl": "",
            "translateName": "SWIMMING",
            "muscles": [
              {
                "name": "gluteus maximus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Turning Over in Bed",
            "namePl": "",
            "translateName": "TURNING OVER IN BED",
            "muscles": [
              {
                "name": "quadratus lumborum",
                "namePl": ""
              },
              {
                "name": "gluteus minimus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Twisting (rotation)",
            "namePl": "",
            "translateName": "TWISTING (ROTATION)",
            "muscles": [
              {
                "name": "quadratus lumborum",
                "namePl": ""
              },
              {
                "name": "superficial spinal muscles",
                "namePl": ""
              },
              {
                "name": "deep spinal muscles",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Upon Rising from Sitting or Lying Down Too Long",
            "namePl": "",
            "translateName": "UPON RISING FROM SITTING OR LYING DOWN TOO LONG",
            "muscles": [
              {
                "name": "psoas/iliacus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Walking",
            "namePl": "",
            "translateName": "WALKING",
            "muscles": [
              {
                "name": "quadratus lumborum",
                "namePl": ""
              },
              {
                "name": "gluteus medius",
                "namePl": ""
              },
              {
                "name": "gluteus minimus",
                "namePl": ""
              },
              {
                "name": "piriformis",
                "namePl": ""
              },
              {
                "name": "psoas/iliacus",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "General symptoms",
        "namePl": "",
        "translateName": "GENERAL SYMPTOMS",
        "symptoms": [
          {
            "name": "Sacroiliac Joint Dysfunction",
            "namePl": "",
            "translateName": "SACROILIAC JOINT DYSFUNCTION",
            "muscles": [
              {
                "name": "gluteus minimus",
                "namePl": ""
              },
              {
                "name": "superficial spinal muscles",
                "namePl": ""
              },
              {
                "name": "quadratus lumborum",
                "namePl": ""
              },
              {
                "name": "pelvic floor (coccygeus)",
                "namePl": ""
              },
              {
                "name": "gluteus medius",
                "namePl": ""
              },
              {
                "name": "piriformis",
                "namePl": ""
              },
              {
                "name": "psoas/iliacus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Sciatica",
            "namePl": "",
            "translateName": "SCIATICA",
            "muscles": [
              {
                "name": "piriformis",
                "namePl": ""
              },
              {
                "name": "gluteus minimus",
                "namePl": ""
              },
              {
                "name": "vastus lateralis",
                "namePl": ""
              },
              {
                "name": "quadratus lumborum",
                "namePl": ""
              },
              {
                "name": "semimembranosus",
                "namePl": ""
              },
              {
                "name": "semitendinosus",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "Tenderness",
        "namePl": "",
        "translateName": "TENDERNESS",
        "symptoms": [
          {
            "name": "Back",
            "namePl": "",
            "translateName": "BACK",
            "muscles": [
              {
                "name": "superficial spinal muscles",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Buttocks",
            "namePl": "",
            "translateName": "BUTTOCKS",
            "muscles": [
              {
                "name": "gluteus maximus",
                "namePl": ""
              },
              {
                "name": "gluteus medius",
                "namePl": ""
              },
              {
                "name": "gluteus minimus",
                "namePl": ""
              },
              {
                "name": "greater trochanter of femur",
                "namePl": ""
              },
              {
                "name": "quadratus lumborum",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Pelvis (top edge)",
            "namePl": "",
            "translateName": "PELVIS (TOP EDGE)",
            "muscles": [
              {
                "name": "gluteus medius",
                "namePl": ""
              },
              {
                "name": "sacroiliac joint",
                "namePl": ""
              },
              {
                "name": "quadratus lumborum",
                "namePl": ""
              },
              {
                "name": "sacrum",
                "namePl": ""
              },
              {
                "name": "gluteus medius",
                "namePl": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "hip-thigh-knee",
    "namePl": "kończyna dolna",
    "translateName": "HIP-THIGH-KNEE",
    "abbreviation": "KD",
    "types": [
      {
        "name": "Pain",
        "namePl": "",
        "translateName": "PAIN",
        "symptoms": [
          {
            "name": "Back of Knee",
            "namePl": "",
            "translateName": "BACK OF KNEE",
            "muscles": [
              {
                "name": "gastrocnemius",
                "namePl": ""
              },
              {
                "name": "biceps femoris",
                "namePl": ""
              },
              {
                "name": "popliteus",
                "namePl": ""
              },
              {
                "name": "semitendinosus",
                "namePl": ""
              },
              {
                "name": "semimembranosus",
                "namePl": ""
              },
              {
                "name": "soleus",
                "namePl": ""
              },
              {
                "name": "plantaris",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Back of Thigh",
            "namePl": "",
            "translateName": "BACK OF THIGH",
            "muscles": [
              {
                "name": "gluteus minimus",
                "namePl": ""
              },
              {
                "name": "semitendinosus",
                "namePl": ""
              },
              {
                "name": "semimembranosus",
                "namePl": ""
              },
              {
                "name": "biceps femoris",
                "namePl": ""
              },
              {
                "name": "piriformis",
                "namePl": ""
              },
              {
                "name": "pelvic floor muscles (obturator internus)",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Front of Knee",
            "namePl": "",
            "translateName": "FRONT OF KNEE",
            "muscles": [
              {
                "name": "rectus femoris",
                "namePl": ""
              },
              {
                "name": "vastus medialis",
                "namePl": ""
              },
              {
                "name": "adductor longus and brevis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Front of Thigh",
            "namePl": "",
            "translateName": "FRONT OF THIGH",
            "muscles": [
              {
                "name": "adductor longus and brevis",
                "namePl": ""
              },
              {
                "name": "psoas/iliacus",
                "namePl": ""
              },
              {
                "name": "adductor magnus",
                "namePl": ""
              },
              {
                "name": "vastus intermedius",
                "namePl": ""
              },
              {
                "name": "pectineus",
                "namePl": ""
              },
              {
                "name": "sartorius",
                "namePl": ""
              },
              {
                "name": "quadratus lumborum",
                "namePl": ""
              },
              {
                "name": "rectus femoris",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Groin (also see Genital) Pain",
            "namePl": "",
            "translateName": "GROIN (ALSO SEE GENITAL) PAIN",
            "muscles": [
              {
                "name": "pectineus",
                "namePl": ""
              },
              {
                "name": "adductor longus and brevis",
                "namePl": ""
              },
              {
                "name": "abdominal obliques",
                "namePl": ""
              },
              {
                "name": "psoas/iliacus",
                "namePl": ""
              },
              {
                "name": "rectus femoris",
                "namePl": ""
              },
              {
                "name": "tensor fasciae latae",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Inner Knee",
            "namePl": "",
            "translateName": "INNER KNEE",
            "muscles": [
              {
                "name": "vastus medialis",
                "namePl": ""
              },
              {
                "name": "gracilis",
                "namePl": ""
              },
              {
                "name": "rectus femoris",
                "namePl": ""
              },
              {
                "name": "sartorius",
                "namePl": ""
              },
              {
                "name": "adductor longus and brevis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Inner Thigh",
            "namePl": "",
            "translateName": "INNER THIGH",
            "muscles": [
              {
                "name": "pectineus",
                "namePl": ""
              },
              {
                "name": "vastus medialis",
                "namePl": ""
              },
              {
                "name": "gracilis",
                "namePl": ""
              },
              {
                "name": "adductor magnus",
                "namePl": ""
              },
              {
                "name": "sartorius",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Outer Knee",
            "namePl": "",
            "translateName": "OUTER KNEE",
            "muscles": [
              {
                "name": "vastus lateralis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Outer Thigh and Hip",
            "namePl": "",
            "translateName": "OUTER THIGH AND HIP",
            "muscles": [
              {
                "name": "gluteus minimus",
                "namePl": ""
              },
              {
                "name": "vastus lateralis",
                "namePl": ""
              },
              {
                "name": "piriformis",
                "namePl": ""
              },
              {
                "name": "quadratus lumborum",
                "namePl": ""
              },
              {
                "name": "tensor fasciae latae",
                "namePl": ""
              },
              {
                "name": "adductor longus and brevis",
                "namePl": ""
              },
              {
                "name": "vastus intermedius",
                "namePl": ""
              },
              {
                "name": "gluteus maximus",
                "namePl": ""
              },
              {
                "name": "rectus femoris",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "General symptoms",
        "namePl": "",
        "translateName": "GENERAL SYMPTOMS",
        "symptoms": [
          {
            "name": "Baker’s Cyst (false)",
            "namePl": "",
            "translateName": "BAKER’S CYST (FALSE)",
            "muscles": [
              {
                "name": "biceps femoris",
                "namePl": ""
              },
              {
                "name": "popliteus",
                "namePl": ""
              },
              {
                "name": "plantaris",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Phantom Limb Pain or Pain with Prosthetic",
            "namePl": "",
            "translateName": "PHANTOM LIMB PAIN OR PAIN WITH PROSTHETIC",
            "muscles": [
              {
                "name": "rectus femoris",
                "namePl": ""
              },
              {
                "name": "semimembranosus",
                "namePl": ""
              },
              {
                "name": "semitendinosus",
                "namePl": ""
              },
              {
                "name": "biceps femoris",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Pubic Stress Symphysitis",
            "namePl": "",
            "translateName": "PUBIC STRESS SYMPHYSITIS",
            "muscles": [
              {
                "name": "pectineus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Trochanteric Bursitis (false)",
            "namePl": "",
            "translateName": "TROCHANTERIC BURSITIS (FALSE)",
            "muscles": [
              {
                "name": "tensor fasciae latae",
                "namePl": ""
              },
              {
                "name": "gluteus minimus",
                "namePl": ""
              },
              {
                "name": "vastus lateralis",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "Numbness or Tingling",
        "namePl": "",
        "translateName": "NUMBNESS OR TINGLING",
        "symptoms": [
          {
            "name": "Thigh",
            "namePl": "",
            "translateName": "THIGH",
            "muscles": [
              {
                "name": "piriformis",
                "namePl": ""
              },
              {
                "name": "sartorius",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "Pain or Trouble with Motion",
        "namePl": "",
        "translateName": "PAIN OR TROUBLE WITH MOTION",
        "symptoms": [
          {
            "name": "Buckling (weak) Knee",
            "namePl": "",
            "translateName": "BUCKLING (WEAK) KNEE",
            "muscles": [
              {
                "name": "vastus medialis",
                "namePl": ""
              },
              {
                "name": "vastus intermedius with gastrocnemius",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Buckling Hip",
            "namePl": "",
            "translateName": "BUCKLING HIP",
            "muscles": [
              {
                "name": "rectus femoris",
                "namePl": ""
              },
              {
                "name": "vastus intermedius",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Crouching",
            "namePl": "",
            "translateName": "CROUCHING",
            "muscles": [
              {
                "name": "popliteus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Going Down Stairs or Hills",
            "namePl": "",
            "translateName": "GOING DOWN STAIRS OR HILLS",
            "muscles": [
              {
                "name": "vastus medialis",
                "namePl": ""
              },
              {
                "name": "rectus femoris",
                "namePl": ""
              },
              {
                "name": "popliteus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Going Up Stairs or Hills",
            "namePl": "",
            "translateName": "GOING UP STAIRS OR HILLS",
            "muscles": [
              {
                "name": "vastus intermedius",
                "namePl": ""
              },
              {
                "name": "vastus lateralis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Inability to Straighten Knee",
            "namePl": "",
            "translateName": "INABILITY TO STRAIGHTEN KNEE",
            "muscles": [
              {
                "name": "vastus lateralis",
                "namePl": ""
              },
              {
                "name": "popliteus",
                "namePl": ""
              },
              {
                "name": "vastus intermedius",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Kicking toward Opposite Side (hip flexion and adduction)",
            "namePl": "",
            "translateName": "KICKING TOWARD OPPOSITE SIDE (HIP FLEXION AND ADDUCTION)",
            "muscles": [
              {
                "name": "pectineus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Limping",
            "namePl": "",
            "translateName": "LIMPING",
            "muscles": [
              {
                "name": "gluteus minimus",
                "namePl": ""
              },
              {
                "name": "vastus lateralis",
                "namePl": ""
              },
              {
                "name": "vastus intermedius",
                "namePl": ""
              },
              {
                "name": "semimembranosus",
                "namePl": ""
              },
              {
                "name": "semitendinosus",
                "namePl": ""
              },
              {
                "name": "biceps femoris",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Locking Knee",
            "namePl": "",
            "translateName": "LOCKING KNEE",
            "muscles": [
              {
                "name": "vastus lateralis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Lying on Your Side: Pain in the Top Hip",
            "namePl": "",
            "translateName": "LYING ON YOUR SIDE: PAIN IN THE TOP HIP",
            "muscles": [
              {
                "name": "tensor fasciae latae",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Lying on Either Side",
            "namePl": "",
            "translateName": "LYING ON EITHER SIDE",
            "muscles": [
              {
                "name": "gluteus minimus",
                "namePl": ""
              },
              {
                "name": "tensor fasciae latae",
                "namePl": ""
              },
              {
                "name": "vastus lateralis",
                "namePl": ""
              },
              {
                "name": "adductor magnus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Rising from a Seated Position",
            "namePl": "",
            "translateName": "RISING FROM A SEATED POSITION",
            "muscles": [
              {
                "name": "pectineus",
                "namePl": ""
              },
              {
                "name": "psoas/iliacus",
                "namePl": ""
              },
              {
                "name": "gluteus minimus",
                "namePl": ""
              },
              {
                "name": "vastus lateralis",
                "namePl": ""
              },
              {
                "name": "vastus intermedius",
                "namePl": ""
              },
              {
                "name": "semimembranosus",
                "namePl": ""
              },
              {
                "name": "semitendinosus",
                "namePl": ""
              },
              {
                "name": "biceps femoris",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Running: Behind the Knee",
            "namePl": "",
            "translateName": "RUNNING: BEHIND THE KNEE",
            "muscles": [
              {
                "name": "popliteus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Sharp Pain or Tingling in Thighs",
            "namePl": "",
            "translateName": "SHARP PAIN OR TINGLING IN THIGHS",
            "muscles": [
              {
                "name": "sartorius",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Sleeping: Interrupted by Pain",
            "namePl": "",
            "translateName": "SLEEPING: INTERRUPTED BY PAIN",
            "muscles": [
              {
                "name": "rectus femoris",
                "namePl": ""
              },
              {
                "name": "vastus medialis",
                "namePl": ""
              },
              {
                "name": "biceps femoris",
                "namePl": ""
              },
              {
                "name": "vastus lateralis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Sitting: Hip",
            "namePl": "",
            "translateName": "SITTING: HIP",
            "muscles": [
              {
                "name": "semimembranosus",
                "namePl": ""
              },
              {
                "name": "semitendinosus",
                "namePl": ""
              },
              {
                "name": "piriformis",
                "namePl": ""
              },
              {
                "name": "tensor fasciae latae",
                "namePl": ""
              },
              {
                "name": "biceps femoris",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Sitting: Lotus Position",
            "namePl": "",
            "translateName": "SITTING: LOTUS POSITION",
            "muscles": [
              {
                "name": "pectineus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Standing",
            "namePl": "",
            "translateName": "STANDING",
            "muscles": [
              {
                "name": "sartorius",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Standing Up Straight",
            "namePl": "",
            "translateName": "STANDING UP STRAIGHT",
            "muscles": [
              {
                "name": "gluteus minimus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Stinging Pain: Inner Thigh",
            "namePl": "",
            "translateName": "STINGING PAIN: INNER THIGH",
            "muscles": [
              {
                "name": "gracilis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Twisting at the Hip",
            "namePl": "",
            "translateName": "TWISTING AT THE HIP",
            "muscles": [
              {
                "name": "adductor longus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Walking: Hip",
            "namePl": "",
            "translateName": "WALKING: HIP",
            "muscles": [
              {
                "name": "quadratus lumborum",
                "namePl": ""
              },
              {
                "name": "tensor fasciae latae",
                "namePl": ""
              },
              {
                "name": "sartorius",
                "namePl": ""
              },
              {
                "name": "gluteus minimus",
                "namePl": ""
              },
              {
                "name": "piriformis",
                "namePl": ""
              },
              {
                "name": "vastus lateralis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Walking: Hip or Leg",
            "namePl": "",
            "translateName": "WALKING: HIP OR LEG",
            "muscles": [
              {
                "name": "semimembranosus",
                "namePl": ""
              },
              {
                "name": "semitendinosus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Walking: Back of Knee",
            "namePl": "",
            "translateName": "WALKING: BACK OF KNEE",
            "muscles": [
              {
                "name": "biceps femoris",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "Reduced Range of Motion",
        "namePl": "",
        "translateName": "REDUCED RANGE OF MOTION",
        "symptoms": [
          {
            "name": "Abduction of Thigh (opening the legs)",
            "namePl": "",
            "translateName": "ABDUCTION OF THIGH (OPENING THE LEGS)",
            "muscles": [
              {
                "name": "adductor longus",
                "namePl": ""
              },
              {
                "name": "adductor magnus",
                "namePl": ""
              },
              {
                "name": "pectineus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Crossing Legs",
            "namePl": "",
            "translateName": "CROSSING LEGS",
            "muscles": [
              {
                "name": "tensor fasciae latae",
                "namePl": ""
              },
              {
                "name": "piriformis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Extension (taking long strides)",
            "namePl": "",
            "translateName": "EXTENSION (TAKING LONG STRIDES)",
            "muscles": [
              {
                "name": "tensor fasciae latae",
                "namePl": ""
              },
              {
                "name": "psoas/iliacus",
                "namePl": ""
              },
              {
                "name": "pectineus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "External Rotation of Thigh (turning the feet and knees out)",
            "namePl": "",
            "translateName": "EXTERNAL ROTATION OF THIGH (TURNING THE FEET AND KNEES OUT)",
            "muscles": [
              {
                "name": "tensor fasciae latae",
                "namePl": ""
              },
              {
                "name": "gluteus minimus",
                "namePl": ""
              },
              {
                "name": "gluteus medius",
                "namePl": ""
              },
              {
                "name": "adductor longus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Inability to Touch Toes",
            "namePl": "",
            "translateName": "INABILITY TO TOUCH TOES",
            "muscles": [
              {
                "name": "semimembranosus",
                "namePl": ""
              },
              {
                "name": "semitendinosus",
                "namePl": ""
              },
              {
                "name": "biceps femoris",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Knee Flexion",
            "namePl": "",
            "translateName": "KNEE FLEXION",
            "muscles": [
              {
                "name": "vastus intermedius",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "Tenderness",
        "namePl": "",
        "translateName": "TENDERNESS",
        "symptoms": [
          {
            "name": "Hip",
            "namePl": "",
            "translateName": "HIP",
            "muscles": [
              {
                "name": "tensor fasciae latae",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Thigh",
            "namePl": "",
            "translateName": "THIGH",
            "muscles": [
              {
                "name": "tensor fasciae latae",
                "namePl": ""
              },
              {
                "name": "vastus intermedius",
                "namePl": ""
              },
              {
                "name": "vastus lateralis",
                "namePl": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "shank-foot",
    "namePl": "stopa",
    "translateName": "SHANK-FOOT",
    "abbreviation": "S",
    "types": [
      {
        "name": "PAIN",
        "namePl": "",
        "translateName": "PAIN",
        "symptoms": [
          {
            "name": "Back of Ankle",
            "namePl": "",
            "translateName": "BACK OF ANKLE",
            "muscles": [
              {
                "name": "soleus",
                "namePl": ""
              },
              {
                "name": "tibialis posterior",
                "namePl": ""
              },
              {
                "name": "flexor digitorum longus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Back of Leg",
            "namePl": "",
            "translateName": "BACK OF LEG",
            "muscles": [
              {
                "name": "soleus",
                "namePl": ""
              },
              {
                "name": "gluteus minimus",
                "namePl": ""
              },
              {
                "name": "gastrocnemius",
                "namePl": ""
              },
              {
                "name": "semitendinosus",
                "namePl": ""
              },
              {
                "name": "semimembranosus",
                "namePl": ""
              },
              {
                "name": "flexor digitorum longus",
                "namePl": ""
              },
              {
                "name": "tibialis posterior",
                "namePl": ""
              },
              {
                "name": "plantaris",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Front of Ankle",
            "namePl": "",
            "translateName": "FRONT OF ANKLE",
            "muscles": [
              {
                "name": "tibialis anterior",
                "namePl": ""
              },
              {
                "name": "peroneus tertius",
                "namePl": ""
              },
              {
                "name": "extensor digitorum longus",
                "namePl": ""
              },
              {
                "name": "extensor hallucis longus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Front of Leg",
            "namePl": "",
            "translateName": "FRONT OF LEG",
            "muscles": [
              {
                "name": "tibialis anterior",
                "namePl": ""
              },
              {
                "name": "adductor longus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Inner Ankle",
            "namePl": "",
            "translateName": "INNER ANKLE",
            "muscles": [
              {
                "name": "abductor hallucis",
                "namePl": ""
              },
              {
                "name": "flexor digitorum longus",
                "namePl": ""
              },
              {
                "name": "soleus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Outer Ankle",
            "namePl": "",
            "translateName": "OUTER ANKLE",
            "muscles": [
              {
                "name": "peroneus longus",
                "namePl": ""
              },
              {
                "name": "peroneus brevis",
                "namePl": ""
              },
              {
                "name": "abductor digiti minimi",
                "namePl": ""
              },
              {
                "name": "peroneus tertius",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Side of Leg",
            "namePl": "",
            "translateName": "SIDE OF LEG",
            "muscles": [
              {
                "name": "gastrocnemius",
                "namePl": ""
              },
              {
                "name": "gluteus minimus",
                "namePl": ""
              },
              {
                "name": "peroneus longus",
                "namePl": ""
              },
              {
                "name": "peroneus brevis",
                "namePl": ""
              },
              {
                "name": "vastus lateralis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Arch and Midfoot",
            "namePl": "",
            "translateName": "ARCH AND MIDFOOT",
            "muscles": [
              {
                "name": "gastrocnemius",
                "namePl": ""
              },
              {
                "name": "flexor digitorum longus",
                "namePl": ""
              },
              {
                "name": "adductor hallucis",
                "namePl": ""
              },
              {
                "name": "soleus",
                "namePl": ""
              },
              {
                "name": "abductor hallucis",
                "namePl": ""
              },
              {
                "name": "tibialis posterior",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Head of Metatarsal",
            "namePl": "",
            "translateName": "HEAD OF METATARSAL",
            "muscles": [
              {
                "name": "flexor hallucis brevis",
                "namePl": ""
              },
              {
                "name": "flexor digitorum brevis",
                "namePl": ""
              },
              {
                "name": "adductor hallucis",
                "namePl": ""
              },
              {
                "name": "flexor hallucis longus",
                "namePl": ""
              },
              {
                "name": "interosseous",
                "namePl": ""
              },
              {
                "name": "abductor digiti minimi",
                "namePl": ""
              },
              {
                "name": "flexor digitorum longus",
                "namePl": ""
              },
              {
                "name": "tibialis posterior",
                "namePl": ""
              },
              {
                "name": "flexor digiti minimi brevis",
                "namePl": ""
              },
              {
                "name": "abductor digiti minimi",
                "namePl": ""
              },
              {
                "name": "gastrocnemius",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Top of Big Toe",
            "namePl": "",
            "translateName": "TOP OF BIG TOE",
            "muscles": [
              {
                "name": "tibialis anterior",
                "namePl": ""
              },
              {
                "name": "extensor hallucis longus",
                "namePl": ""
              },
              {
                "name": "flexor hallucis brevis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Top of Foot",
            "namePl": "",
            "translateName": "TOP OF FOOT",
            "muscles": [
              {
                "name": "extensor digitorum brevis",
                "namePl": ""
              },
              {
                "name": "extensor hallucis brevis",
                "namePl": ""
              },
              {
                "name": "extensor digitorum longus",
                "namePl": ""
              },
              {
                "name": "extensor hallucis longus",
                "namePl": ""
              },
              {
                "name": "flexor hallucis brevis",
                "namePl": ""
              },
              {
                "name": "interosseous",
                "namePl": ""
              },
              {
                "name": "tibialis anterior",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Top of Smaller Toes",
            "namePl": "",
            "translateName": "TOP OF SMALLER TOES",
            "muscles": [
              {
                "name": "interosseous",
                "namePl": ""
              },
              {
                "name": "extensor digitorum longus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Under Big Toe",
            "namePl": "",
            "translateName": "UNDER BIG TOE",
            "muscles": [
              {
                "name": "flexor hallucis longus",
                "namePl": ""
              },
              {
                "name": "flexor hallucis brevis",
                "namePl": ""
              },
              {
                "name": "tibialis posterior",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Under Smaller Toes",
            "namePl": "",
            "translateName": "UNDER SMALLER TOES",
            "muscles": [
              {
                "name": "flexor digitorum longus",
                "namePl": ""
              },
              {
                "name": "tibialis posterior",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "General symptoms",
        "namePl": "",
        "translateName": "GENERAL SYMPTOMS",
        "symptoms": [
          {
            "name": "Achilles Tendonitis",
            "namePl": "",
            "translateName": "ACHILLES TENDONITIS",
            "muscles": [
              {
                "name": "tibialis posterior",
                "namePl": ""
              },
              {
                "name": "soleus",
                "namePl": ""
              },
              {
                "name": "gastrocnemius",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Ankle Sprain",
            "namePl": "",
            "translateName": "ANKLE SPRAIN",
            "muscles": [
              {
                "name": "peroneus longus",
                "namePl": ""
              },
              {
                "name": "peroneus brevis",
                "namePl": ""
              },
              {
                "name": "peroneus tertius",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Claw Toes",
            "namePl": "",
            "translateName": "CLAW TOES",
            "muscles": [
              {
                "name": "flexor digitorum longus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Calf Cramps",
            "namePl": "",
            "translateName": "CALF CRAMPS",
            "muscles": [
              {
                "name": "gastrocnemius",
                "namePl": ""
              },
              {
                "name": "extensor digitorum longus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Hammertoes",
            "namePl": "",
            "translateName": "HAMMERTOES",
            "muscles": [
              {
                "name": "flexor digitorum longus",
                "namePl": ""
              },
              {
                "name": "extensor digitorum longus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Morton’s Foot Syndrome",
            "namePl": "",
            "translateName": "MORTON’S FOOT SYNDROME",
            "muscles": [
              {
                "name": "peroneus longus",
                "namePl": ""
              },
              {
                "name": "peroneus brevis",
                "namePl": ""
              },
              {
                "name": "peroneus tertius",
                "namePl": ""
              },
              {
                "name": "tibialis posterior",
                "namePl": ""
              },
              {
                "name": "flexor digitorum longus",
                "namePl": ""
              },
              {
                "name": "flexor hallucis longus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Shin Splint",
            "namePl": "",
            "translateName": "SHIN SPLINT",
            "muscles": [
              {
                "name": "tibialis anterior",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "Tenderness",
        "namePl": "",
        "translateName": "TENDERNESS",
        "symptoms": [
          {
            "name": "Achilles Tendon",
            "namePl": "",
            "translateName": "ACHILLES TENDON",
            "muscles": [
              {
                "name": "soleus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Ankle",
            "namePl": "",
            "translateName": "ANKLE",
            "muscles": [
              {
                "name": "tibialis anterior",
                "namePl": ""
              },
              {
                "name": "peroneus tertius",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Big Toe",
            "namePl": "",
            "translateName": "BIG TOE",
            "muscles": [
              {
                "name": "tibialis anterior",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Bottom of Forefoot",
            "namePl": "",
            "translateName": "BOTTOM OF FOREFOOT",
            "muscles": [
              {
                "name": "adductor hallucis",
                "namePl": ""
              },
              {
                "name": "flexor digitorum longus",
                "namePl": ""
              },
              {
                "name": "flexor digitorum brevis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Heel",
            "namePl": "",
            "translateName": "HEEL",
            "muscles": [
              {
                "name": "soleus",
                "namePl": ""
              },
              {
                "name": "quadratus plantae",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Sides of the Toes",
            "namePl": "",
            "translateName": "SIDES OF THE TOES",
            "muscles": [
              {
                "name": "interosseous",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Top of Feet",
            "namePl": "",
            "translateName": "TOP OF FEET",
            "muscles": [
              {
                "name": "extensor digitorum longus",
                "namePl": ""
              },
              {
                "name": "extensor hallucis longus",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "Weakness",
        "namePl": "",
        "translateName": "WEAKNESS",
        "symptoms": [
          {
            "name": "Ankle",
            "namePl": "",
            "translateName": "ANKLE",
            "muscles": [
              {
                "name": "tibialis anterior",
                "namePl": ""
              },
              {
                "name": "extensor digitorum longus",
                "namePl": ""
              },
              {
                "name": "peroneus longus",
                "namePl": ""
              },
              {
                "name": "peroneus brevis",
                "namePl": ""
              },
              {
                "name": "peroneus tertius",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "Numbness and Tingling",
        "namePl": "",
        "translateName": "NUMBNESS AND TINGLING",
        "symptoms": [
          {
            "name": "Lower Leg and Foot",
            "namePl": "",
            "translateName": "LOWER LEG AND FOOT",
            "muscles": [
              {
                "name": "piriformis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Big Toe",
            "namePl": "",
            "translateName": "BIG TOE",
            "muscles": [
              {
                "name": "first interosseous",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Toes",
            "namePl": "",
            "translateName": "TOES",
            "muscles": [
              {
                "name": "flexor digiti minimi brevis",
                "namePl": ""
              },
              {
                "name": "flexor hallucis brevis",
                "namePl": ""
              },
              {
                "name": "adductor hallucis",
                "namePl": ""
              },
              {
                "name": "interosseous",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Top of the Foot",
            "namePl": "",
            "translateName": "TOP OF THE FOOT",
            "muscles": [
              {
                "name": "peroneus longus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Plantar Fasciitis",
            "namePl": "",
            "translateName": "PLANTAR FASCIITIS",
            "muscles": [
              {
                "name": "soleus",
                "namePl": ""
              },
              {
                "name": "gastrocnemius",
                "namePl": ""
              },
              {
                "name": "quadratus plantae",
                "namePl": ""
              },
              {
                "name": "flexor digitorum brevis",
                "namePl": ""
              },
              {
                "name": "abductor hallucis",
                "namePl": ""
              },
              {
                "name": "abductor digiti minimi",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "Pain or Trouble with Movement",
        "namePl": "",
        "translateName": "PAIN OR TROUBLE WITH MOVEMENT",
        "symptoms": [
          {
            "name": "Aching Pain at Rest",
            "namePl": "",
            "translateName": "ACHING PAIN AT REST",
            "muscles": [
              {
                "name": "abductor hallucis",
                "namePl": ""
              },
              {
                "name": "abductor digiti minimi",
                "namePl": ""
              },
              {
                "name": "flexor digitorum brevis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Ankle",
            "namePl": "",
            "translateName": "ANKLE",
            "muscles": [
              {
                "name": "tibialis anterior",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Back of Knee Pain while Climbing Up Stairs or Hills",
            "namePl": "",
            "translateName": "BACK OF KNEE PAIN WHILE CLIMBING UP STAIRS OR HILLS",
            "muscles": [
              {
                "name": "gastrocnemius",
                "namePl": ""
              },
              {
                "name": "soleus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Difficulty Picking Things Up off of the Floor",
            "namePl": "",
            "translateName": "DIFFICULTY PICKING THINGS UP OFF OF THE FLOOR",
            "muscles": [
              {
                "name": "soleus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Dorsiflexion (flexing foot)",
            "namePl": "",
            "translateName": "DORSIFLEXION (FLEXING FOOT)",
            "muscles": [
              {
                "name": "soleus",
                "namePl": ""
              },
              {
                "name": "tibialis anterior",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Foot Drop",
            "namePl": "",
            "translateName": "FOOT DROP",
            "muscles": [
              {
                "name": "tibialis anterior",
                "namePl": ""
              },
              {
                "name": "peroneus longus",
                "namePl": ""
              },
              {
                "name": "extensor digitorum longus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Foot Slap",
            "namePl": "",
            "translateName": "FOOT SLAP",
            "muscles": [
              {
                "name": "tibialis anterior",
                "namePl": ""
              },
              {
                "name": "extensor digitorum longus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Pain and Swelling of Ankle and Foot",
            "namePl": "",
            "translateName": "PAIN AND SWELLING OF ANKLE AND FOOT",
            "muscles": [
              {
                "name": "soleus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Running",
            "namePl": "",
            "translateName": "RUNNING",
            "muscles": [
              {
                "name": "soleus",
                "namePl": ""
              },
              {
                "name": "tibialis posterior",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Standing",
            "namePl": "",
            "translateName": "STANDING",
            "muscles": [
              {
                "name": "flexor digitorum longus",
                "namePl": ""
              },
              {
                "name": "flexor digitorum brevis",
                "namePl": ""
              },
              {
                "name": "flexor hallucis longus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Standing: Leaning Forward",
            "namePl": "",
            "translateName": "STANDING: LEANING FORWARD",
            "muscles": [
              {
                "name": "gastrocnemius",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Straightening the Knee with Foot Flexed",
            "namePl": "",
            "translateName": "STRAIGHTENING THE KNEE WITH FOOT FLEXED",
            "muscles": [
              {
                "name": "gastrocnemius",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Tripping",
            "namePl": "",
            "translateName": "TRIPPING",
            "muscles": [
              {
                "name": "tibialis anterior",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Unstable Ankle (also see Morton’s Foot)",
            "namePl": "",
            "translateName": "UNSTABLE ANKLE (ALSO SEE MORTON’S FOOT)",
            "muscles": [
              {
                "name": "peroneus longus",
                "namePl": ""
              },
              {
                "name": "peroneus brevis",
                "namePl": ""
              },
              {
                "name": "peroneus tertius",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Walking",
            "namePl": "",
            "translateName": "WALKING",
            "muscles": [
              {
                "name": "tibialis anterior",
                "namePl": ""
              },
              {
                "name": "tibialis posterior",
                "namePl": ""
              },
              {
                "name": "gastrocnemius",
                "namePl": ""
              },
              {
                "name": "soleus",
                "namePl": ""
              },
              {
                "name": "flexor digitorum longus",
                "namePl": ""
              },
              {
                "name": "flexor hallucis longus",
                "namePl": ""
              },
              {
                "name": "flexor digitorum brevis",
                "namePl": ""
              },
              {
                "name": "flexor hallucis brevis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Walking Down Stairs or Hills",
            "namePl": "",
            "translateName": "WALKING DOWN STAIRS OR HILLS",
            "muscles": [
              {
                "name": "soleus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Walking Fast",
            "namePl": "",
            "translateName": "WALKING FAST",
            "muscles": [
              {
                "name": "soleus",
                "namePl": ""
              },
              {
                "name": "gastrocnemius",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Walking on Slanted Surface",
            "namePl": "",
            "translateName": "WALKING ON SLANTED SURFACE",
            "muscles": [
              {
                "name": "gastrocnemius",
                "namePl": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "elbow-forearm-hand",
    "namePl": "kończyna górna",
    "translateName": "ELBOW-FOREARM-HAND",
    "abbreviation": "KG",
    "types": [
      {
        "name": "PAIN",
        "namePl": "",
        "translateName": "PAIN",
        "symptoms": [
          {
            "name": "Inner Elbow",
            "namePl": "",
            "translateName": "INNER ELBOW",
            "muscles": [
              {
                "name": "triceps",
                "namePl": ""
              },
              {
                "name": "pectoralis major",
                "namePl": ""
              },
              {
                "name": "abductor pollicis brevis",
                "namePl": ""
              },
              {
                "name": "pectoralis minor",
                "namePl": ""
              },
              {
                "name": "serratus anterior",
                "namePl": ""
              },
              {
                "name": "serratus posterior superior",
                "namePl": ""
              },
              {
                "name": "abductor pollicis brevis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Inner Finger",
            "namePl": "",
            "translateName": "INNER FINGER",
            "muscles": [
              {
                "name": "(palm side) flexor digitorum",
                "namePl": ""
              },
              {
                "name": "interosseous",
                "namePl": ""
              },
              {
                "name": "triceps",
                "namePl": ""
              },
              {
                "name": "latissimus dorsi",
                "namePl": ""
              },
              {
                "name": "serratus anterior",
                "namePl": ""
              },
              {
                "name": "abductor digiti minimi manus",
                "namePl": ""
              },
              {
                "name": "pronator quadratus",
                "namePl": ""
              },
              {
                "name": "subclavius",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Inner Forearm",
            "namePl": "",
            "translateName": "INNER FOREARM",
            "muscles": [
              {
                "name": "pronator quadratus",
                "namePl": ""
              },
              {
                "name": "palmaris longus",
                "namePl": ""
              },
              {
                "name": "pronator teres",
                "namePl": ""
              },
              {
                "name": "serratus anterior",
                "namePl": ""
              },
              {
                "name": "triceps",
                "namePl": ""
              },
              {
                "name": "latissimus dorsi",
                "namePl": ""
              },
              {
                "name": "pectoralis major",
                "namePl": ""
              },
              {
                "name": "pectoralis minor",
                "namePl": ""
              },
              {
                "name": "serratus posterior superior",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Inner Wrist and Palm",
            "namePl": "",
            "translateName": "INNER WRIST AND PALM",
            "muscles": [
              {
                "name": "flexor carpi radialis",
                "namePl": ""
              },
              {
                "name": "flexor carpi ulnaris",
                "namePl": ""
              },
              {
                "name": "opponens pollicis",
                "namePl": ""
              },
              {
                "name": "palmaris longus",
                "namePl": ""
              },
              {
                "name": "pronator teres",
                "namePl": ""
              },
              {
                "name": "pronator quadratus",
                "namePl": ""
              },
              {
                "name": "abductor pollicis brevis",
                "namePl": ""
              },
              {
                "name": "abductor pollicis longus",
                "namePl": ""
              },
              {
                "name": "pectoralis major",
                "namePl": ""
              },
              {
                "name": "pectoralis",
                "namePl": ""
              },
              {
                "name": "minor",
                "namePl": ""
              },
              {
                "name": "latissimus dorsi",
                "namePl": ""
              },
              {
                "name": "serratus anterior",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Outer Finger (dorsal side)",
            "namePl": "",
            "translateName": "OUTER FINGER (DORSAL SIDE)",
            "muscles": [
              {
                "name": "extensor digitorum",
                "namePl": ""
              },
              {
                "name": "interosseous",
                "namePl": ""
              },
              {
                "name": "scalenes",
                "namePl": ""
              },
              {
                "name": "abductor digiti minimi manus",
                "namePl": ""
              },
              {
                "name": "abductor pollicis longus",
                "namePl": ""
              },
              {
                "name": "triceps",
                "namePl": ""
              },
              {
                "name": "pectoralis minor",
                "namePl": ""
              },
              {
                "name": "latissimus dorsi",
                "namePl": ""
              },
              {
                "name": "subclavius",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Outer Forearm",
            "namePl": "",
            "translateName": "OUTER FOREARM",
            "muscles": [
              {
                "name": "brachioradialis",
                "namePl": ""
              },
              {
                "name": "triceps",
                "namePl": ""
              },
              {
                "name": "scalenes",
                "namePl": ""
              },
              {
                "name": "extensors",
                "namePl": ""
              },
              {
                "name": "infraspinatus",
                "namePl": ""
              },
              {
                "name": "teres major",
                "namePl": ""
              },
              {
                "name": "coracobrachialis",
                "namePl": ""
              },
              {
                "name": "supraspinatus",
                "namePl": ""
              },
              {
                "name": "subclavius",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Outer Elbow",
            "namePl": "",
            "translateName": "OUTER ELBOW",
            "muscles": [
              {
                "name": "extensors",
                "namePl": ""
              },
              {
                "name": "supinator",
                "namePl": ""
              },
              {
                "name": "brachioradialis",
                "namePl": ""
              },
              {
                "name": "triceps",
                "namePl": ""
              },
              {
                "name": "supraspinatus",
                "namePl": ""
              },
              {
                "name": "anconeus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Outer Wrist and Hand",
            "namePl": "",
            "translateName": "OUTER WRIST AND HAND",
            "muscles": [
              {
                "name": "extensors",
                "namePl": ""
              },
              {
                "name": "abductor pollicis longus",
                "namePl": ""
              },
              {
                "name": "abductor pollicis brevis",
                "namePl": ""
              },
              {
                "name": "subscapularis",
                "namePl": ""
              },
              {
                "name": "coracobrachialis",
                "namePl": ""
              },
              {
                "name": "scalenes",
                "namePl": ""
              },
              {
                "name": "latissimus dorsi",
                "namePl": ""
              },
              {
                "name": "serratus posterior superior",
                "namePl": ""
              },
              {
                "name": "first dorsal interosseous",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Thumb and Web",
            "namePl": "",
            "translateName": "THUMB AND WEB",
            "muscles": [
              {
                "name": "supinator",
                "namePl": ""
              },
              {
                "name": "scalenes",
                "namePl": ""
              },
              {
                "name": "brachialis",
                "namePl": ""
              },
              {
                "name": "infraspinatus",
                "namePl": ""
              },
              {
                "name": "extensor carpi radialis longus",
                "namePl": ""
              },
              {
                "name": "brachioradialis",
                "namePl": ""
              },
              {
                "name": "abductor pollicis brevis",
                "namePl": ""
              },
              {
                "name": "opponens pollicis",
                "namePl": ""
              },
              {
                "name": "adductor pollicis",
                "namePl": ""
              },
              {
                "name": "subclavius",
                "namePl": ""
              },
              {
                "name": "first dorsal interosseous",
                "namePl": ""
              },
              {
                "name": "flexor pollicis longus",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "GENERAL SYMPTOMS",
        "namePl": "",
        "translateName": "GENERAL SYMPTOMS",
        "symptoms": [
          {
            "name": "Arthritis",
            "namePl": "",
            "translateName": "ARTHRITIS",
            "muscles": [
              {
                "name": "extensor digitorum",
                "namePl": ""
              },
              {
                "name": "interosseous",
                "namePl": ""
              }
            ]
          },
          {
            "name": "de Quervain’s Stenosing Tenosynovitis",
            "namePl": "",
            "translateName": "DE QUERVAIN’S STENOSING TENOSYNOVITIS",
            "muscles": [
              {
                "name": "abductor pollicis longus",
                "namePl": ""
              },
              {
                "name": "extensor carpi radialis longus",
                "namePl": ""
              },
              {
                "name": "extensor carpi radialis brevis",
                "namePl": ""
              },
              {
                "name": "brachioradialis",
                "namePl": ""
              },
              {
                "name": "palmaris longus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Difficulty or Pain with Fine Motor Skills",
            "namePl": "",
            "translateName": "DIFFICULTY OR PAIN WITH FINE MOTOR SKILLS",
            "muscles": [
              {
                "name": "thenar (thumb muscles)",
                "namePl": ""
              },
              {
                "name": "hypothenar (pinky muscles)",
                "namePl": ""
              },
              {
                "name": "interosseous",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Finger Stiffness Tenderness or Weakness",
            "namePl": "",
            "translateName": "FINGER STIFFNESS TENDERNESS OR WEAKNESS",
            "muscles": [
              {
                "name": "extensor digitorum",
                "namePl": ""
              },
              {
                "name": "extensor indicis",
                "namePl": ""
              },
              {
                "name": "flexor digitorum",
                "namePl": ""
              },
              {
                "name": "interosseous",
                "namePl": ""
              },
              {
                "name": "hypothenar",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Golfer’s Elbow (medial epicondylitis)",
            "namePl": "",
            "translateName": "GOLFER’S ELBOW (MEDIAL EPICONDYLITIS)",
            "muscles": [
              {
                "name": "triceps",
                "namePl": ""
              },
              {
                "name": "pectoralis major",
                "namePl": ""
              },
              {
                "name": "forearm flexors",
                "namePl": ""
              },
              {
                "name": "abductor pollicis brevis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Hand Swelling scalenes",
            "namePl": "",
            "translateName": "HAND SWELLING SCALENES",
            "muscles": []
          },
          {
            "name": "Heberden’s Nodes",
            "namePl": "",
            "translateName": "HEBERDEN’S NODES",
            "muscles": [
              {
                "name": "interosseous",
                "namePl": ""
              },
              {
                "name": "adductor pollicis",
                "namePl": ""
              },
              {
                "name": "abductor digiti minimi",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Tennis Elbow (lateral epicondylitis)",
            "namePl": "",
            "translateName": "TENNIS ELBOW (LATERAL EPICONDYLITIS)",
            "muscles": [
              {
                "name": "supinator",
                "namePl": ""
              },
              {
                "name": "brachioradialis",
                "namePl": ""
              },
              {
                "name": "extensor carpi radialis longus",
                "namePl": ""
              },
              {
                "name": "extensor digitorum",
                "namePl": ""
              },
              {
                "name": "triceps",
                "namePl": ""
              },
              {
                "name": "anconeus",
                "namePl": ""
              },
              {
                "name": "biceps",
                "namePl": ""
              },
              {
                "name": "brachialis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Trigger Finger",
            "namePl": "",
            "translateName": "TRIGGER FINGER",
            "muscles": [
              {
                "name": "tendons of the hand and finger",
                "namePl": ""
              },
              {
                "name": "flexors",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Trigger Thumb",
            "namePl": "",
            "translateName": "TRIGGER THUMB",
            "muscles": [
              {
                "name": "flexor pollicis brevis",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "CARPAL TUNNEL SYNDROME",
        "namePl": "",
        "translateName": "CARPAL TUNNEL SYNDROME",
        "symptoms": [
          {
            "name": "Entrapment of the Median Nerve in the Forearm",
            "namePl": "",
            "translateName": "ENTRAPMENT OF THE MEDIAN NERVE IN THE FOREARM",
            "muscles": [
              {
                "name": "pronator teres",
                "namePl": ""
              },
              {
                "name": "flexor carpi radialis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Pseudo–Carpal Tunnel Syndrome",
            "namePl": "",
            "translateName": "PSEUDO–CARPAL TUNNEL SYNDROME",
            "muscles": [
              {
                "name": "brachialis",
                "namePl": ""
              },
              {
                "name": "flexor digitorum",
                "namePl": ""
              },
              {
                "name": "scalenes",
                "namePl": ""
              },
              {
                "name": "palmaris longus",
                "namePl": ""
              },
              {
                "name": "opponens pollicis",
                "namePl": ""
              },
              {
                "name": "adductor pollicis",
                "namePl": ""
              },
              {
                "name": "brachioradialis",
                "namePl": ""
              },
              {
                "name": "extensor carpi radialis longus",
                "namePl": ""
              },
              {
                "name": "extensor carpi radialis brevis",
                "namePl": ""
              },
              {
                "name": "subscapularis",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "CUBITAL TUNNEL SYNDROME",
        "namePl": "",
        "translateName": "CUBITAL TUNNEL SYNDROME",
        "symptoms": [
          {
            "name": "Entrapment of the Ulnar Nerve in the Forearm",
            "namePl": "",
            "translateName": "ENTRAPMENT OF THE ULNAR NERVE IN THE FOREARM",
            "muscles": [
              {
                "name": "flexor carpi ulnaris",
                "namePl": ""
              },
              {
                "name": "flexor digitorum",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Entrapment of the Ulnar Nerve in the Hand",
            "namePl": "",
            "translateName": "ENTRAPMENT OF THE ULNAR NERVE IN THE HAND",
            "muscles": [
              {
                "name": "opponens digiti minimi",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "GRIP (handshake doorknob screwdriver hand tools)",
        "namePl": "",
        "translateName": "GRIP (HANDSHAKE DOORKNOB SCREWDRIVER HAND TOOLS)",
        "symptoms": [
          {
            "name": "Undependable",
            "namePl": "",
            "translateName": "UNDEPENDABLE",
            "muscles": [
              {
                "name": "scalenes",
                "namePl": ""
              },
              {
                "name": "extensor carpi radialis longus",
                "namePl": ""
              },
              {
                "name": "extensor digitorum",
                "namePl": ""
              },
              {
                "name": "supinator",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Weakness",
            "namePl": "",
            "translateName": "WEAKNESS",
            "muscles": [
              {
                "name": "brachioradialis",
                "namePl": ""
              },
              {
                "name": "extensor carpi radialis longus",
                "namePl": ""
              },
              {
                "name": "extensor carpi radialis brevis",
                "namePl": ""
              },
              {
                "name": "extensor digitorum",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Pain",
            "namePl": "",
            "translateName": "PAIN",
            "muscles": [
              {
                "name": "extensor carpi radialis longus",
                "namePl": ""
              },
              {
                "name": "extensor digitorum",
                "namePl": ""
              },
              {
                "name": "supinator",
                "namePl": ""
              },
              {
                "name": "flexor digitorum",
                "namePl": ""
              },
              {
                "name": "flexor carpi radialis",
                "namePl": ""
              },
              {
                "name": "flexor ulnaris",
                "namePl": ""
              },
              {
                "name": "interosseous",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "NUMBNESS AND TINGLING",
        "namePl": "",
        "translateName": "NUMBNESS AND TINGLING",
        "symptoms": [
          {
            "name": "Forearm",
            "namePl": "",
            "translateName": "FOREARM",
            "muscles": [
              {
                "name": "triceps",
                "namePl": ""
              },
              {
                "name": "pectoralis minor",
                "namePl": ""
              },
              {
                "name": "serratus posterior superior",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Middle and Ring Fingers (with index or pinky occasionally)",
            "namePl": "",
            "translateName": "MIDDLE AND RING FINGERS (WITH INDEX OR PINKY OCCASIONALLY)",
            "muscles": [
              {
                "name": "pronator teres",
                "namePl": ""
              },
              {
                "name": "flexor digitorum",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Pinky Ring and Middle Fingers",
            "namePl": "",
            "translateName": "PINKY RING AND MIDDLE FINGERS",
            "muscles": [
              {
                "name": "scalenes",
                "namePl": ""
              },
              {
                "name": "pectoralis minor",
                "namePl": ""
              },
              {
                "name": "serratus posterior superior",
                "namePl": ""
              },
              {
                "name": "triceps",
                "namePl": ""
              },
              {
                "name": "teres minor",
                "namePl": ""
              },
              {
                "name": "flexor carpi ulnaris",
                "namePl": ""
              },
              {
                "name": "flexor digitorum",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Thumb and First Finger",
            "namePl": "",
            "translateName": "THUMB AND FIRST FINGER",
            "muscles": [
              {
                "name": "extensor carpi radialis brevis",
                "namePl": ""
              },
              {
                "name": "brachialis",
                "namePl": ""
              },
              {
                "name": "supinator",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Radial Nerve Entrapment",
            "namePl": "",
            "translateName": "RADIAL NERVE ENTRAPMENT",
            "muscles": [
              {
                "name": "triceps",
                "namePl": ""
              },
              {
                "name": "extensor carpi radialis brevis",
                "namePl": ""
              },
              {
                "name": "supinator",
                "namePl": ""
              },
              {
                "name": "brachialis",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "TENDERNESS",
        "namePl": "",
        "translateName": "TENDERNESS",
        "symptoms": [
          {
            "name": "Elbow",
            "namePl": "",
            "translateName": "ELBOW",
            "muscles": [
              {
                "name": "triceps",
                "namePl": ""
              },
              {
                "name": "brachioradialis",
                "namePl": ""
              },
              {
                "name": "supinator",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Palm (prickling feeling)",
            "namePl": "",
            "translateName": "PALM (PRICKLING FEELING)",
            "muscles": [
              {
                "name": "palmaris longus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Thumb (and web of hand)",
            "namePl": "",
            "translateName": "THUMB (AND WEB OF HAND)",
            "muscles": [
              {
                "name": "brachialis",
                "namePl": ""
              },
              {
                "name": "scalenes",
                "namePl": ""
              },
              {
                "name": "supinator",
                "namePl": ""
              },
              {
                "name": "brachioradialis",
                "namePl": ""
              },
              {
                "name": "extensor carpi radialis longus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Wrist",
            "namePl": "",
            "translateName": "WRIST",
            "muscles": [
              {
                "name": "flexor carpi radialis",
                "namePl": ""
              },
              {
                "name": "flexor ulnaris",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "THORACIC OUTLET SYNDROME",
        "namePl": "",
        "translateName": "THORACIC OUTLET SYNDROME",
        "symptoms": [
          {
            "name": "Thoracic Outlet Syndrome",
            "namePl": "",
            "translateName": "THORACIC OUTLET SYNDROME",
            "muscles": [
              {
                "name": "scalenes",
                "namePl": ""
              },
              {
                "name": "pectoralis minor",
                "namePl": ""
              },
              {
                "name": "subclavius",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Pseudo–Thoracic Outlet Syndrome",
            "namePl": "",
            "translateName": "PSEUDO–THORACIC OUTLET SYNDROME",
            "muscles": [
              {
                "name": "pectoralis major",
                "namePl": ""
              },
              {
                "name": "latissimus dorsi",
                "namePl": ""
              },
              {
                "name": "subscapularis",
                "namePl": ""
              },
              {
                "name": "teres major",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "WEAKNESS",
        "namePl": "",
        "translateName": "WEAKNESS",
        "symptoms": [
          {
            "name": "Arm",
            "namePl": "",
            "translateName": "ARM",
            "muscles": [
              {
                "name": "biceps",
                "namePl": ""
              },
              {
                "name": "scalenes",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Hand",
            "namePl": "",
            "translateName": "HAND",
            "muscles": [
              {
                "name": "scalenes",
                "namePl": ""
              },
              {
                "name": "triceps",
                "namePl": ""
              },
              {
                "name": "extensor carpi radialis brevis",
                "namePl": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "shoulder-top-back-arm",
    "namePl": "ramię-bark",
    "translateName": "SHOULDER-TOP-BACK-ARM",
    "abbreviation": "R",
    "types": [
      {
        "name": "Pain",
        "namePl": "",
        "translateName": "PAIN",
        "symptoms": [
          {
            "name": "Back of Arm",
            "namePl": "",
            "translateName": "BACK OF ARM",
            "muscles": [
              {
                "name": "scalenes",
                "namePl": ""
              },
              {
                "name": "triceps",
                "namePl": ""
              },
              {
                "name": "posterior deltoid",
                "namePl": ""
              },
              {
                "name": "subscapularis",
                "namePl": ""
              },
              {
                "name": "supraspinatus",
                "namePl": ""
              },
              {
                "name": "teres major",
                "namePl": ""
              },
              {
                "name": "teres minor",
                "namePl": ""
              },
              {
                "name": "latissimus dorsi",
                "namePl": ""
              },
              {
                "name": "serratus posterior superior",
                "namePl": ""
              },
              {
                "name": "coracobrachialis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Back of Shoulder",
            "namePl": "",
            "translateName": "BACK OF SHOULDER",
            "muscles": [
              {
                "name": "posterior deltoid",
                "namePl": ""
              },
              {
                "name": "levator scapula",
                "namePl": ""
              },
              {
                "name": "scalenes",
                "namePl": ""
              },
              {
                "name": "supraspinatus",
                "namePl": ""
              },
              {
                "name": "teres major",
                "namePl": ""
              },
              {
                "name": "teres minor",
                "namePl": ""
              },
              {
                "name": "subscapularis",
                "namePl": ""
              },
              {
                "name": "serratus posterior superior",
                "namePl": ""
              },
              {
                "name": "latissimus dorsi",
                "namePl": ""
              },
              {
                "name": "triceps",
                "namePl": ""
              },
              {
                "name": "trapezius",
                "namePl": ""
              },
              {
                "name": "superficial spinal muscles",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Front of Arm",
            "namePl": "",
            "translateName": "FRONT OF ARM",
            "muscles": [
              {
                "name": "scalenes",
                "namePl": ""
              },
              {
                "name": "infraspinatus",
                "namePl": ""
              },
              {
                "name": "biceps",
                "namePl": ""
              },
              {
                "name": "brachialis",
                "namePl": ""
              },
              {
                "name": "triceps",
                "namePl": ""
              },
              {
                "name": "supraspinatus",
                "namePl": ""
              },
              {
                "name": "anterior deltoid",
                "namePl": ""
              },
              {
                "name": "subclavius",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Front of Shoulder",
            "namePl": "",
            "translateName": "FRONT OF SHOULDER",
            "muscles": [
              {
                "name": "infraspinatus",
                "namePl": ""
              },
              {
                "name": "anterior deltoid (115)scalenes",
                "namePl": ""
              },
              {
                "name": "supraspinatus",
                "namePl": ""
              },
              {
                "name": "pectoralis major",
                "namePl": ""
              },
              {
                "name": "pectoralis minor",
                "namePl": ""
              },
              {
                "name": "biceps",
                "namePl": ""
              },
              {
                "name": "coracobrachialis",
                "namePl": ""
              },
              {
                "name": "latissimus dorsi",
                "namePl": ""
              },
              {
                "name": "subclavius",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Side of Shoulder",
            "namePl": "",
            "translateName": "SIDE OF SHOULDER",
            "muscles": [
              {
                "name": "infraspinatus",
                "namePl": ""
              },
              {
                "name": "scalenes",
                "namePl": ""
              },
              {
                "name": "middle deltoid",
                "namePl": ""
              },
              {
                "name": "supraspinatus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Upper Back",
            "namePl": "",
            "translateName": "UPPER BACK",
            "muscles": [
              {
                "name": "scalenes",
                "namePl": ""
              },
              {
                "name": "levator scapula",
                "namePl": ""
              },
              {
                "name": "trapezius",
                "namePl": ""
              },
              {
                "name": "rhomboids",
                "namePl": ""
              },
              {
                "name": "latissimus dorsi",
                "namePl": ""
              },
              {
                "name": "deep spinal muscles",
                "namePl": ""
              },
              {
                "name": "superficial spinal muscles",
                "namePl": ""
              },
              {
                "name": "serratus posterior superior",
                "namePl": ""
              },
              {
                "name": "infraspinatus",
                "namePl": ""
              },
              {
                "name": "serratus anterior",
                "namePl": ""
              },
              {
                "name": "splenius cervicis",
                "namePl": ""
              },
              {
                "name": "supraspinatus",
                "namePl": ""
              },
              {
                "name": "multifidi and rotatores",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "GENERAL SYMPTOMS",
        "namePl": "",
        "translateName": "GENERAL SYMPTOMS",
        "symptoms": [
          {
            "name": "Restlessness",
            "namePl": "",
            "translateName": "RESTLESSNESS",
            "muscles": [
              {
                "name": "scalenes",
                "namePl": ""
              },
              {
                "name": "infraspinatus",
                "namePl": ""
              },
              {
                "name": "subscapularis",
                "namePl": ""
              },
              {
                "name": "biceps",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Tenderness (shoulder)",
            "namePl": "",
            "translateName": "TENDERNESS (SHOULDER)",
            "muscles": [
              {
                "name": "infraspinatus",
                "namePl": ""
              },
              {
                "name": "subscapularis",
                "namePl": ""
              },
              {
                "name": "biceps",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Tendonitis or Arthritis",
            "namePl": "",
            "translateName": "TENDONITIS OR ARTHRITIS",
            "muscles": [
              {
                "name": "supraspinatus",
                "namePl": ""
              },
              {
                "name": "subscapularis",
                "namePl": ""
              },
              {
                "name": "deltoids",
                "namePl": ""
              },
              {
                "name": "biceps",
                "namePl": ""
              },
              {
                "name": "infraspinatus",
                "namePl": ""
              },
              {
                "name": "teres major",
                "namePl": ""
              },
              {
                "name": "pectoralis major",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Thoracic Outlet Syndrome",
            "namePl": "",
            "translateName": "THORACIC OUTLET SYNDROME",
            "muscles": [
              {
                "name": "scalenes",
                "namePl": ""
              },
              {
                "name": "pectoralis minor",
                "namePl": ""
              },
              {
                "name": "subclavius",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Pseudo Thoracic Outlet Syndrome",
            "namePl": "",
            "translateName": "PSEUDO THORACIC OUTLET SYNDROME",
            "muscles": [
              {
                "name": "pectoralis major",
                "namePl": ""
              },
              {
                "name": "latissimus dorsi",
                "namePl": ""
              },
              {
                "name": "subscapularis",
                "namePl": ""
              },
              {
                "name": "teres major",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Bursitis scalenes",
            "namePl": "",
            "translateName": "BURSITIS SCALENES",
            "muscles": [
              {
                "name": "supraspinatus",
                "namePl": ""
              },
              {
                "name": "teres major",
                "namePl": ""
              },
              {
                "name": "subscapularis",
                "namePl": ""
              },
              {
                "name": "deltoids",
                "namePl": ""
              },
              {
                "name": "biceps",
                "namePl": ""
              },
              {
                "name": "latissimus dorsi",
                "namePl": ""
              },
              {
                "name": "pectoralis major",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Crepitus (sounds with movement)",
            "namePl": "",
            "translateName": "CREPITUS (SOUNDS WITH MOVEMENT)",
            "muscles": [
              {
                "name": "Back rhomboids",
                "namePl": ""
              },
              {
                "name": "Shoulder supraspinatus",
                "namePl": ""
              },
              {
                "name": "biceps",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Frozen Shoulder (adhesive capsulitis)",
            "namePl": "",
            "translateName": "FROZEN SHOULDER (ADHESIVE CAPSULITIS)",
            "muscles": [
              {
                "name": "subscapularis",
                "namePl": ""
              },
              {
                "name": "infraspinatus",
                "namePl": ""
              },
              {
                "name": "supraspinatus",
                "namePl": ""
              },
              {
                "name": "pectoralis major",
                "namePl": ""
              },
              {
                "name": "serratus anterior",
                "namePl": ""
              },
              {
                "name": "latissimus dorsi",
                "namePl": ""
              },
              {
                "name": "rhomboids",
                "namePl": ""
              },
              {
                "name": "deltoids",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Impingement Syndromes",
            "namePl": "",
            "translateName": "IMPINGEMENT SYNDROMES",
            "muscles": [
              {
                "name": "supraspinatus",
                "namePl": ""
              },
              {
                "name": "anterior deltoid",
                "namePl": ""
              },
              {
                "name": "subscapularis",
                "namePl": ""
              },
              {
                "name": "biceps",
                "namePl": ""
              },
              {
                "name": "Musculocutaneous",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Nerve Entrapment",
            "namePl": "",
            "translateName": "NERVE ENTRAPMENT",
            "muscles": [
              {
                "name": "coracobrachialis",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "Pain or Stiffness with Movement",
        "namePl": "",
        "translateName": "PAIN OR STIFFNESS WITH MOVEMENT",
        "symptoms": [
          {
            "name": "Breathing",
            "namePl": "",
            "translateName": "BREATHING",
            "muscles": [
              {
                "name": "serratus posterior superior",
                "namePl": ""
              },
              {
                "name": "serratus anterior",
                "namePl": ""
              },
              {
                "name": "scalenes",
                "namePl": ""
              },
              {
                "name": "pectoralis minor",
                "namePl": ""
              },
              {
                "name": "latissimus dorsi",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Driving without Power Steering",
            "namePl": "",
            "translateName": "DRIVING WITHOUT POWER STEERING",
            "muscles": [
              {
                "name": "teres major",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Raising Arm Out to the Side",
            "namePl": "",
            "translateName": "RAISING ARM OUT TO THE SIDE",
            "muscles": [
              {
                "name": "supraspinatus",
                "namePl": ""
              },
              {
                "name": "subscapularis",
                "namePl": ""
              },
              {
                "name": "deltoids",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Reaching Back at Shoulder Level",
            "namePl": "",
            "translateName": "REACHING BACK AT SHOULDER LEVEL",
            "muscles": [
              {
                "name": "rhomboids",
                "namePl": ""
              },
              {
                "name": "pectoralis minor",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Reaching Behind",
            "namePl": "",
            "translateName": "REACHING BEHIND",
            "muscles": [
              {
                "name": "supraspinatus",
                "namePl": ""
              },
              {
                "name": "infraspinatus",
                "namePl": ""
              },
              {
                "name": "pectoralis minor",
                "namePl": ""
              },
              {
                "name": "coracobrachialis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Reaching Down",
            "namePl": "",
            "translateName": "REACHING DOWN",
            "muscles": [
              {
                "name": "rhomboids",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Reaching Up and Back",
            "namePl": "",
            "translateName": "REACHING UP AND BACK",
            "muscles": [
              {
                "name": "teres major",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Reaching Up and Forward",
            "namePl": "",
            "translateName": "REACHING UP AND FORWARD",
            "muscles": [
              {
                "name": "latissimus dorsi",
                "namePl": ""
              },
              {
                "name": "teres major",
                "namePl": ""
              },
              {
                "name": "supraspinatus",
                "namePl": ""
              },
              {
                "name": "pectoralis minor",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Resting Elbow on a Desk",
            "namePl": "",
            "translateName": "RESTING ELBOW ON A DESK",
            "muscles": [
              {
                "name": "teres major",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Sleeping: Side Lying",
            "namePl": "",
            "translateName": "SLEEPING: SIDE LYING",
            "muscles": [
              {
                "name": "infraspinatus",
                "namePl": ""
              },
              {
                "name": "latissimus dorsi",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Turning Arm Palm Up",
            "namePl": "",
            "translateName": "TURNING ARM PALM UP",
            "muscles": [
              {
                "name": "subscapularis",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "Reduced Range of Motion",
        "namePl": "",
        "translateName": "REDUCED RANGE OF MOTION",
        "symptoms": [
          {
            "name": "Abduction (movement toward the outside)",
            "namePl": "",
            "translateName": "ABDUCTION (MOVEMENT TOWARD THE OUTSIDE)",
            "muscles": [
              {
                "name": "deltoids",
                "namePl": ""
              },
              {
                "name": "subscapularis",
                "namePl": ""
              },
              {
                "name": "pectoralis major",
                "namePl": ""
              },
              {
                "name": "pectoralis minor",
                "namePl": ""
              },
              {
                "name": "teres major",
                "namePl": ""
              },
              {
                "name": "triceps",
                "namePl": ""
              },
              {
                "name": "supraspinatus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Adduction (movement toward the body)",
            "namePl": "",
            "translateName": "ADDUCTION (MOVEMENT TOWARD THE BODY)",
            "muscles": [
              {
                "name": "infraspinatus",
                "namePl": ""
              },
              {
                "name": "supraspinatus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Extension of Upper Arm",
            "namePl": "",
            "translateName": "EXTENSION OF UPPER ARM",
            "muscles": [
              {
                "name": "deltoids",
                "namePl": ""
              },
              {
                "name": "infraspinatus",
                "namePl": ""
              },
              {
                "name": "pectoralis minor",
                "namePl": ""
              },
              {
                "name": "supraspinatus",
                "namePl": ""
              },
              {
                "name": "biceps",
                "namePl": ""
              }
            ]
          },
          {
            "name": "External (lateral) Rotation",
            "namePl": "",
            "translateName": "EXTERNAL (LATERAL) ROTATION",
            "muscles": [
              {
                "name": "subscapularis",
                "namePl": ""
              },
              {
                "name": "infraspinatus",
                "namePl": ""
              },
              {
                "name": "pectoralis major",
                "namePl": ""
              },
              {
                "name": "pectoralis minor",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Flexion of Upper Arm",
            "namePl": "",
            "translateName": "FLEXION OF UPPER ARM",
            "muscles": [
              {
                "name": "deltoids",
                "namePl": ""
              },
              {
                "name": "pectoralis minor",
                "namePl": ""
              },
              {
                "name": "supraspinatus",
                "namePl": ""
              },
              {
                "name": "infraspinatus",
                "namePl": ""
              },
              {
                "name": "biceps",
                "namePl": ""
              },
              {
                "name": "teres major",
                "namePl": ""
              },
              {
                "name": "latissimus dorsi",
                "namePl": ""
              },
              {
                "name": "pectoralis minor",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Internal (medial) rotation",
            "namePl": "",
            "translateName": "INTERNAL (MEDIAL) ROTATION",
            "muscles": [
              {
                "name": "infraspinatus",
                "namePl": ""
              },
              {
                "name": "teres minor",
                "namePl": ""
              },
              {
                "name": "subscapularis",
                "namePl": ""
              },
              {
                "name": "",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Upward Rotation (movement of arm from 90 degrees abduction to completely overhead)",
            "namePl": "",
            "translateName": "UPWARD ROTATION (MOVEMENT OF ARM FROM 90 DEGREES ABDUCTION TO COMPLETELY OVERHEAD)",
            "muscles": [
              {
                "name": "supraspinatus",
                "namePl": ""
              },
              {
                "name": "deltoids",
                "namePl": ""
              },
              {
                "name": "subscapularis",
                "namePl": ""
              },
              {
                "name": "serratus anterior",
                "namePl": ""
              },
              {
                "name": "coracobrachialis",
                "namePl": ""
              },
              {
                "name": "biceps",
                "namePl": ""
              },
              {
                "name": "",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "Weakness",
        "namePl": "",
        "translateName": "WEAKNESS",
        "symptoms": [
          {
            "name": "Shoulder",
            "namePl": "",
            "translateName": "SHOULDER",
            "muscles": [
              {
                "name": "deltoids",
                "namePl": ""
              },
              {
                "name": "infraspinatus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Arm biceps",
            "namePl": "",
            "translateName": "ARM BICEPS",
            "muscles": [
              {
                "name": "scalenes",
                "namePl": ""
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "name": "head-face-neck",
    "namePl": "głowa",
    "translateName": "HEAD-FACE-NECK",
    "abbreviation": "G",
    "types": [
      {
        "name": "Pain",
        "namePl": "",
        "translateName": "PAIN",
        "symptoms": [
          {
            "name": "Back of Head",
            "namePl": "",
            "translateName": "BACK OF HEAD",
            "muscles": [
              {
                "name": "trapezius",
                "namePl": ""
              },
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              },
              {
                "name": "semispinalis",
                "namePl": ""
              },
              {
                "name": "splenius cervicis",
                "namePl": ""
              },
              {
                "name": "suboccipitals",
                "namePl": ""
              },
              {
                "name": "occipitalis",
                "namePl": ""
              },
              {
                "name": "digastric",
                "namePl": ""
              },
              {
                "name": "temporalis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Back of Neck",
            "namePl": "",
            "translateName": "BACK OF NECK",
            "muscles": [
              {
                "name": "trapezius",
                "namePl": ""
              },
              {
                "name": "multifidi",
                "namePl": ""
              },
              {
                "name": "levator scapulae",
                "namePl": ""
              },
              {
                "name": "splenius cervicis",
                "namePl": ""
              },
              {
                "name": "infraspinatus",
                "namePl": ""
              },
              {
                "name": "digastric",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Crown Headache",
            "namePl": "",
            "translateName": "CROWN HEADACHE",
            "muscles": [
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              },
              {
                "name": "splenius capitis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Ear and Jaw",
            "namePl": "",
            "translateName": "EAR AND JAW",
            "muscles": [
              {
                "name": "lateral pterygoid",
                "namePl": ""
              },
              {
                "name": "masseter",
                "namePl": ""
              },
              {
                "name": "medial pterygoid",
                "namePl": ""
              },
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              },
              {
                "name": "trapezius",
                "namePl": ""
              },
              {
                "name": "soleus",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Eye and Eyebrow",
            "namePl": "",
            "translateName": "EYE AND EYEBROW",
            "muscles": [
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              },
              {
                "name": "temporalis",
                "namePl": ""
              },
              {
                "name": "splenius cervicis",
                "namePl": ""
              },
              {
                "name": "masseter",
                "namePl": ""
              },
              {
                "name": "suboccipitals",
                "namePl": ""
              },
              {
                "name": "occipitalis",
                "namePl": ""
              },
              {
                "name": "orbicularis oculi",
                "namePl": ""
              },
              {
                "name": "trapezius",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Frontal Headache",
            "namePl": "",
            "translateName": "FRONTAL HEADACHE",
            "muscles": [
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              },
              {
                "name": "semispinalis capitis",
                "namePl": ""
              },
              {
                "name": "frontalis",
                "namePl": ""
              },
              {
                "name": "zygomaticus major",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Sinus",
            "namePl": "",
            "translateName": "SINUS",
            "muscles": [
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              },
              {
                "name": "masseter",
                "namePl": ""
              },
              {
                "name": "lateral pterygoid",
                "namePl": ""
              },
              {
                "name": "orbicularis oculi",
                "namePl": ""
              },
              {
                "name": "zygomaticus major",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Temple Headache",
            "namePl": "",
            "translateName": "TEMPLE HEADACHE",
            "muscles": [
              {
                "name": "trapezius",
                "namePl": ""
              },
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              },
              {
                "name": "temporalis",
                "namePl": ""
              },
              {
                "name": "splenius cervicis",
                "namePl": ""
              },
              {
                "name": "suboccipitals",
                "namePl": ""
              },
              {
                "name": "semispinalis capitis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Throat",
            "namePl": "",
            "translateName": "THROAT",
            "muscles": [
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              },
              {
                "name": "digastric",
                "namePl": ""
              },
              {
                "name": "medial pterygoid",
                "namePl": ""
              },
              {
                "name": "longus colli",
                "namePl": ""
              },
              {
                "name": "platysma",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Tongue",
            "namePl": "",
            "translateName": "TONGUE",
            "muscles": [
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              },
              {
                "name": "medial pterygoid",
                "namePl": ""
              },
              {
                "name": "mylohyoid",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Toothache",
            "namePl": "",
            "translateName": "TOOTHACHE",
            "muscles": [
              {
                "name": "temporalis",
                "namePl": ""
              },
              {
                "name": "masseter",
                "namePl": ""
              },
              {
                "name": "digastric",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "GENERAL SYMPTOMS",
        "namePl": "",
        "translateName": "GENERAL SYMPTOMS",
        "symptoms": [
          {
            "name": "Tinnitus (ringing in the ears)",
            "namePl": "",
            "translateName": "TINNITUS (RINGING IN THE EARS)",
            "muscles": [
              {
                "name": "masseter",
                "namePl": ""
              },
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              },
              {
                "name": "lateral pterygoid",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Tooth Sensitivity",
            "namePl": "",
            "translateName": "TOOTH SENSITIVITY",
            "muscles": [
              {
                "name": "masseter",
                "namePl": ""
              },
              {
                "name": "temporalis",
                "namePl": ""
              },
              {
                "name": "digastric",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Trigeminal Neuralgia",
            "namePl": "",
            "translateName": "TRIGEMINAL NEURALGIA",
            "muscles": [
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Vertigo",
            "namePl": "",
            "translateName": "VERTIGO",
            "muscles": [
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Visual Disturbances",
            "namePl": "",
            "translateName": "VISUAL DISTURBANCES",
            "muscles": [
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              },
              {
                "name": "splenius cervicis",
                "namePl": ""
              },
              {
                "name": "suboccipitals",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Vocal Tension",
            "namePl": "",
            "translateName": "VOCAL TENSION",
            "muscles": [
              {
                "name": "masseter",
                "namePl": ""
              },
              {
                "name": "mylohyoid",
                "namePl": ""
              },
              {
                "name": "longus colli",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Sinus Drainage",
            "namePl": "",
            "translateName": "SINUS DRAINAGE",
            "muscles": [
              {
                "name": "masseter",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Sore Throat",
            "namePl": "",
            "translateName": "SORE THROAT",
            "muscles": [
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              },
              {
                "name": "longus colli",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Stiffness Neck",
            "namePl": "",
            "translateName": "STIFFNESS NECK",
            "muscles": [
              {
                "name": "trapezius",
                "namePl": ""
              },
              {
                "name": "levator scapulae",
                "namePl": ""
              },
              {
                "name": "semispinalis",
                "namePl": ""
              },
              {
                "name": "splenius cervicis",
                "namePl": ""
              },
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              },
              {
                "name": "suboccipitals",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Swallowing Difficulty",
            "namePl": "",
            "translateName": "SWALLOWING DIFFICULTY",
            "muscles": [
              {
                "name": "lateral pterygoid",
                "namePl": ""
              },
              {
                "name": "medial pterygoid",
                "namePl": ""
              },
              {
                "name": "longus colli",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Tearing",
            "namePl": "",
            "translateName": "TEARING",
            "muscles": [
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Temporomandibular Joint (TMJ) Dysfunction",
            "namePl": "",
            "translateName": "TEMPOROMANDIBULAR JOINT (TMJ) DYSFUNCTION",
            "muscles": [
              {
                "name": "masseter",
                "namePl": ""
              },
              {
                "name": "lateral pterygoid",
                "namePl": ""
              },
              {
                "name": "medial pterygoid",
                "namePl": ""
              },
              {
                "name": "temporalis",
                "namePl": ""
              },
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Blurred Vision",
            "namePl": "",
            "translateName": "BLURRED VISION",
            "muscles": [
              {
                "name": "splenius cervicis",
                "namePl": ""
              },
              {
                "name": "suboccipitals",
                "namePl": ""
              },
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Cough",
            "namePl": "",
            "translateName": "COUGH",
            "muscles": [
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Dizziness",
            "namePl": "",
            "translateName": "DIZZINESS",
            "muscles": [
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Ear Itch",
            "namePl": "",
            "translateName": "EAR ITCH",
            "muscles": [
              {
                "name": "masseter",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Ear Stuffiness",
            "namePl": "",
            "translateName": "EAR STUFFINESS",
            "muscles": [
              {
                "name": "masseter",
                "namePl": ""
              },
              {
                "name": "medial pterygoid",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Excess Mucus or Phlegm",
            "namePl": "",
            "translateName": "EXCESS MUCUS OR PHLEGM",
            "muscles": [
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              },
              {
                "name": "lateral pterygoid",
                "namePl": ""
              },
              {
                "name": "zygomaticus",
                "namePl": ""
              },
              {
                "name": "levator labii",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Eyelid Droop",
            "namePl": "",
            "translateName": "EYELID DROOP",
            "muscles": [
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              },
              {
                "name": "orbicularis oculi",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Eye Redness",
            "namePl": "",
            "translateName": "EYE REDNESS",
            "muscles": [
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Eye Twitch",
            "namePl": "",
            "translateName": "EYE TWITCH",
            "muscles": [
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              },
              {
                "name": "orbicularis oculi",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Hearing Loss",
            "namePl": "",
            "translateName": "HEARING LOSS",
            "muscles": [
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Imbalance",
            "namePl": "",
            "translateName": "IMBALANCE",
            "muscles": [
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Malocclusion of Teeth (teeth do not fit together)",
            "namePl": "",
            "translateName": "MALOCCLUSION OF TEETH (TEETH DO NOT FIT TOGETHER)",
            "muscles": [
              {
                "name": "temporalis",
                "namePl": ""
              },
              {
                "name": "lateral pterygoid",
                "namePl": ""
              },
              {
                "name": "digastric",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Migraine Headache",
            "namePl": "",
            "translateName": "MIGRAINE HEADACHE",
            "muscles": [
              {
                "name": "trapezius",
                "namePl": ""
              },
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              },
              {
                "name": "splenius cervicis",
                "namePl": ""
              },
              {
                "name": "suboccipitals",
                "namePl": ""
              },
              {
                "name": "temporalis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Nausea",
            "namePl": "",
            "translateName": "NAUSEA",
            "muscles": [
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "Numbness",
        "namePl": "",
        "translateName": "NUMBNESS",
        "symptoms": [
          {
            "name": "Head",
            "namePl": "",
            "translateName": "HEAD",
            "muscles": [
              {
                "name": "splenius cervicis",
                "namePl": ""
              },
              {
                "name": "semispinalis capitis",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "Pain or Trouble with Motion",
        "namePl": "",
        "translateName": "PAIN OR TROUBLE WITH MOTION",
        "symptoms": [
          {
            "name": "Head: Lying Down",
            "namePl": "",
            "translateName": "HEAD: LYING DOWN",
            "muscles": [
              {
                "name": "semispinalis capitis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Teeth: Biting Down",
            "namePl": "",
            "translateName": "TEETH: BITING DOWN",
            "muscles": [
              {
                "name": "medial pterygoid",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Throat: Swallowing",
            "namePl": "",
            "translateName": "THROAT: SWALLOWING",
            "muscles": [
              {
                "name": "medial pterygoid",
                "namePl": ""
              },
              {
                "name": "digastric",
                "namePl": ""
              },
              {
                "name": "mylohyoid",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "Reduced Range of Motion",
        "namePl": "",
        "translateName": "REDUCED RANGE OF MOTION",
        "symptoms": [
          {
            "name": "Jaw",
            "namePl": "",
            "translateName": "JAW",
            "muscles": [
              {
                "name": "masseter",
                "namePl": ""
              },
              {
                "name": "temporalis",
                "namePl": ""
              },
              {
                "name": "lateral pterygoid",
                "namePl": ""
              },
              {
                "name": "medial pterygoid",
                "namePl": ""
              },
              {
                "name": "digastric",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Neck: Flexion/Extension",
            "namePl": "",
            "translateName": "NECK: FLEXION/EXTENSION",
            "muscles": [
              {
                "name": "semispinalis",
                "namePl": ""
              },
              {
                "name": "splenius cervicis",
                "namePl": ""
              },
              {
                "name": "suboccipitals",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Neck: Rotation",
            "namePl": "",
            "translateName": "NECK: ROTATION",
            "muscles": [
              {
                "name": "levator scapulae",
                "namePl": ""
              },
              {
                "name": "splenius cervicis",
                "namePl": ""
              },
              {
                "name": "suboccipitals",
                "namePl": ""
              },
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              },
              {
                "name": "trapezius",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Neck: Sideways Flexion",
            "namePl": "",
            "translateName": "NECK: SIDEWAYS FLEXION",
            "muscles": [
              {
                "name": "trapezius",
                "namePl": ""
              },
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              },
              {
                "name": "splenius cervicis",
                "namePl": ""
              },
              {
                "name": "scalenes",
                "namePl": ""
              },
              {
                "name": "suboccipitals",
                "namePl": ""
              }
            ]
          }
        ]
      },
      {
        "name": "Tenderness",
        "namePl": "",
        "translateName": "TENDERNESS",
        "symptoms": [
          {
            "name": "Back of the Head",
            "namePl": "",
            "translateName": "BACK OF THE HEAD",
            "muscles": [
              {
                "name": "semispinalis capitis",
                "namePl": ""
              }
            ]
          },
          {
            "name": "Scalp",
            "namePl": "",
            "translateName": "SCALP",
            "muscles": [
              {
                "name": "sternocleidomastoid",
                "namePl": ""
              }
            ]
          }
        ]
      }
    ]
  }
];
